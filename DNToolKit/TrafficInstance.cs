using System.Security.Cryptography;
using Common.Protobuf;
using DNToolKit.Crypto;
using DNToolKit.Extensions;
using DNToolKit.Protocol;
using Google.Protobuf;
using PacketDotNet;
using Serilog;

namespace DNToolKit;

public class TrafficInstance{
    private KCP? _client;
    private KCP? _server;

    public enum Sender
    {
        Client,
        Server
    } 
    public TrafficInstance(Action<TrafficPacket> callback)
    {
        this.callback = callback;
        ClientPrivate.FromXmlString(RsaKeyLookup.NA);
    }

    private Action<TrafficPacket> callback;
    

    private void ProcessHandshake(byte[] data, Sender sender){
        var magic = data.GetUInt32(0);
        var conv = data.GetUInt32(4);
        var token = data.GetUInt32(8);

        switch (magic)
        {
            // Server Handshake
            case 0x145:
                if (sender != Sender.Server)
                    break;
                
                Log.Debug("Server Handshake : {Conv}, {Token}", conv, token);
                _client = new KCP(conv, token, Sender.Client);
                _server = new KCP(conv, token, Sender.Server);
                break;
            // Disconnect
            case 0x194:
                if (sender == Sender.Server)
                    break;

                if (_client is null)
                    break;

                Log.Information("{Sender} disconnected", sender);
                break;
            case 0xFF:
                // Ignore
                break;
            default:
                Log.Error("Unhandled Handshake {MagicBytes}", magic);
                return;
        }

        return;
    }


    private byte[] XorCopy(byte[] source, byte[] key)
    {
        byte[] result = new byte[source.Length];
        for (int i = 0; i < source.Length; i++)
        {
            result[i] = (byte)(source[i] ^ key[i % key.Length]);
        }
        return result;
    }

    
    
    //todo: make this not hardcoded for na client
    private byte[] curKey = Convert.FromBase64String(Crypto.DispatchKeyLookup.DispatchKeys[29921]);
    private static readonly RSA ClientPrivate = RSA.Create();

    private uint startingMagic = 0x4567;
    private uint endingMagic = 0x89ab;

    private uint seq = 0;
    
    public class ProtobufParseResult
    {
        public IMessage? Packet { get; set; }
        public PacketHead? Head { get; set; }
        public bool Success { get; set; }
        public bool HasHead => Head != null;
    }

    public ProtobufParseResult ParseProtobuf(byte[] data, uint CmdId, byte[]? head)
    {

        PacketHead? packetHead = null;
        if(head != null)
            packetHead = PacketHead.Parser.ParseFrom(head);
        
        var opcode = (Common.Opcode) CmdId;
        var name = opcode.ToString();

        var parser = Common.ProtobufParser.GetPacketTypeParser(opcode);
        if (parser != null)
        {
            var obj = parser.ParseFrom(data);
            return new ProtobufParseResult()
            {
                Packet = obj,
                Head = packetHead,
                Success = true
            };
        }

        return new ProtobufParseResult();
    }

    public class BruteforceContext
    {
        public uint hasEverything = 0;
        
        
        public ulong? _tokenReqSendTime;
        public void setTokenReqSendTime(ulong? time)
        {
            _tokenReqSendTime = time;
            hasEverything |= 1;
        }
        public ulong? _tokenRspServerKey;
        public void setTokenRspServerKey(ulong? key)
        {
            _tokenRspServerKey = key;
            hasEverything |= 2;
        }
        public bool hasAll()
        {
            return hasEverything == 3;
        }

        public void Clear()
        {
            hasEverything = 0;
            _tokenReqSendTime = null;
            _tokenRspServerKey = null;
        }
    }

    private BruteforceContext bfcontext = new BruteforceContext();
    
    public TrafficPacket ProcessKcpPacket(byte[] data)
    {
        var xored = XorCopy(data, curKey);
        var magic = xored.GetUInt16(0);
        if (magic != 0x4567)
        {
            Console.WriteLine("Magic "+ magic);

            if (bfcontext.hasAll())
            {
                Log.Debug("bruteforcing...");

                var key = KeyBruteForcer.BruteForce(data, (long)bfcontext._tokenReqSendTime,bfcontext._tokenRspServerKey.Value);
                curKey = key._buffer;
                xored = XorCopy(data, curKey);

            }
            else
            {
                Log.Debug("missing something...");
                Log.Debug("{b}", bfcontext._tokenReqSendTime);
                Log.Debug("{b}", bfcontext._tokenRspServerKey);
                Environment.Exit(0);

            }
            

        }
        
        var cmdId = xored.GetUInt16(2);
        var packetHeaderLen = xored.GetUInt16(4);
        var dataLen = xored.GetUInt32(6);


        var slice = new byte[dataLen];
        Array.Copy(xored, 10 + packetHeaderLen, slice, 0, dataLen);
        var magic2 = xored.GetUInt16((int)(10 + packetHeaderLen + dataLen));

        var head = new byte[packetHeaderLen];
        Array.Copy(xored, 10, head, 0, packetHeaderLen);
        
        if (packetHeaderLen + dataLen + 12 != xored.Length) {
            Log.Warning("weird packet length discrepancy? reported: {reported}, actual: {actual}", packetHeaderLen + dataLen + 16, xored.Length);
        }

        if (magic2 != endingMagic) {
            Log.Error("Magic2 was wrong {Magic2}", magic2);
            
            Environment.Exit(0);
        }
        var obj = ParseProtobuf(slice, cmdId, head);

        if ((Common.Opcode)cmdId == Common.Opcode.GetPlayerTokenRsp)
        {
            var token = (obj.Packet as GetPlayerTokenRsp);
            ulong? sentTime = obj?.Head?.SentMs;
            var key = ClientPrivate.Decrypt(Convert.FromBase64String(token.ServerRandKey),
                RSAEncryptionPadding.Pkcs1);
            var serverKey = key.GetUInt64(0);

            if (sentTime != null)
            {
                bfcontext.setTokenReqSendTime(sentTime);
                bfcontext.setTokenRspServerKey(serverKey);
            }
            else
            {
                Log.Error("Failed to get sentTime or serverKey from GetPlayerTokenRsp");
            }




        }
        
        return new TrafficPacket()
        {
            CmdId = cmdId,
            Data = slice,
            Seq = ++seq,
        };


    }

    public void ProcessUdpPacket(UdpPacket packet){
        var sender = packet.DestinationPort == 22101 || packet.DestinationPort == 22102 ? Sender.Client : Sender.Server;

        var bytes = packet.PayloadData;
        if(bytes.Length == 20){
            //handshake.
            ProcessHandshake(bytes, sender);
            return;
        }

        if (_client is null || _server is null)
        {
            Log.Verbose("Ignoring packet of length {Length} from {Sender} because handshake is not complete", 
                bytes.Length, sender);
            return;

        }
        var kcp = sender == Sender.Client ? _client : _server;
        kcp.Input(bytes);


        while (true)
        {
            var serverRecv = _server.Receive();
            var clientRecv = _client.Receive();
            if (!serverRecv.isSuccess && !clientRecv.isSuccess)
            {
                break;
            }

            if (serverRecv.isSuccess)
            {
                var result = ProcessKcpPacket(serverRecv.bytes!);
                result.Source = Sender.Server;
                callback(result);
            }

            if (clientRecv.isSuccess)
            {
                var result = ProcessKcpPacket(clientRecv.bytes!);
                result.Source = Sender.Client;
                callback(result);
            }
        }
    }
    
    


    public class TrafficPacket
    {
        //game traffic packet
        public uint CmdId;
        public byte[] Data;
        public uint Seq;
        public Sender Source;
    }
}