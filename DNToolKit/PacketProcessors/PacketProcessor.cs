using System.Buffers.Text;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using Common;
using Common.Protobuf;
using DNToolKit.Frontend;
using DNToolKit.Packet;
using DNToolKit.Sniffer;
using Newtonsoft.Json;
using Serilog;

namespace DNToolKit.PacketProcessors;

public class PacketProcessor
{
    private readonly ConcurrentQueue<EncryptedPacket> Queue = new();

    private static readonly RSA ClientPrivate = RSA.Create();
    private MTKey? _key;
    private MTKey? _sessionKey;
    private bool _useSessionKey = false;
    
    private ulong? _tokenReqSendTime;
    private ulong? _tokenRspServerKey;
    
    
    //investigate if i even need a separate working thread
    // private Thread _workingThread;

    private byte _timesBFed;
    // bool _running;

    private long count = 0;



    public PacketProcessor()
    {
        //todo: take from a file
        ClientPrivate.FromXmlString(Program.Config.ClientPrivateRSA);

        //  _workingThread = new Thread(Work)
        //  {
        //      Name = "PacketProcessor",
        //  };
        // _workingThread.Start();
        _timesBFed = 0;
    }

    public void Reset()
    {
        Queue.Clear();
        _tokenRspServerKey = null;
        _tokenReqSendTime = null;
        _sessionKey = null;
        _useSessionKey = false;
        _key = null;
        _timesBFed = 0;
        count = 0;
    }

    public void AddPacket(byte[] data, UdpHandler.Sender sender)
    {
        // if (!_workingThread.IsAlive) _workingThread.Start();
        Werk(new EncryptedPacket(data, sender));
        // Queue.Enqueue(new EncryptedPacket(data, sender));
    }

    public void Stop()
    {
        
        // if (_workingThread.IsAlive)
        // {
        //     _running = false;
        //     _workingThread.Join();
        //     // if(!_workingThread.Join(10000)) _workingThread.Interrupt();
        // }

        Log.Information("PacketProcessor stopped...");
        Log.Information($"{Queue.Count} packets leftover...");
    }

    public void Werk(EncryptedPacket encryptedPacket)
    {
        var item = encryptedPacket.Data;
        {
            if (!_useSessionKey)
            {
                _key ??= KeyRecovery.FindKey(item);
                _key?.Crypt(item);
            }
            else
            {
                if (_sessionKey is null)
                {
                    Log.Debug("Bruteforcing Key...");
                    //Program.TestBF((long)tokenReqSendTime, tokenRspServerKey, item);
                    _timesBFed++;
                    if (_tokenReqSendTime.HasValue && _tokenRspServerKey.HasValue)
                    {
                        _sessionKey = KeyBruteForcer.BruteForce(item, (long)_tokenReqSendTime.Value, _tokenRspServerKey.Value);
                    }

                }

                if (_sessionKey is null) Log.Warning("something went wrong!");
                _sessionKey?.Crypt(item);

                if (_timesBFed > 10)
                {
                    Log.Error(
                        "Brute forcing has failed many times, so make sure you login on a freshly launched client. Or something else could have happened idk");
                    Program.Stop();
                }
            }

            if (item.GetUInt16(0, true) == 0x4567)
            {
                ParsePacketFromData(encryptedPacket);
            }
            else if (_sessionKey is null)
            {
                //we may need to bruteforce
                Log.Warning("Encrypted Packet got through lol");
                // _sessionKey.TaskFlag().Wait();
                //should be fine because we store the time 
                //Queue.Enqueue(encryptedPacket);
            }
            else
            {
                Log.Warning("There was a false positive with the bruteforcer somehow? Invalidating old key maybe a reconnect!");
                _sessionKey = null;
                // Log.Information("@{slay}", encryptedPacket.Data);
            }
        }
    }


    private void ParsePacketFromData(EncryptedPacket encryptedPacket)
    {
        //todo: i think i need to handle exceptions but i *did* just check packet magic earlier so idk
        try
        {
            //this is SO UGLY

            var packet = new Packet.Packet(encryptedPacket.Data) { Sender = encryptedPacket.Sender };

            var type = packet.PacketType;

            Log.Information($"{count++} {type}");

            if (type == Opcode.GetPlayerTokenRsp)
            {
                //ideally we do it based on tokenreq but unless your ping is like 3000 we should be fine
                _tokenReqSendTime = (packet.Metadata.SentMs);

                var tokenRsp = packet.PacketData as GetPlayerTokenRsp;
                Log.Information("${@TokenRsp}", tokenRsp);
                if (tokenRsp?.ServerRandKey is not null)
                {
                    var key = ClientPrivate.Decrypt(Convert.FromBase64String(tokenRsp.ServerRandKey),
                        RSAEncryptionPadding.Pkcs1);
                    _tokenRspServerKey = (key.GetUInt64(0, true));
                    _useSessionKey = true;
                }
                else
                {
                    Log.Warning("failed to get serverSeed");
                }
            }

            //todo: massively fix this code lol
            switch (type)
            {
                case Opcode.UnionCmdNotify:
                    UnionCmdProcessor.ProcessUnion(packet);
                    return;
                case Opcode.CombatInvocationsNotify:
                {
                    var list = CombatInvokeProcessor.ProcessCombatInvoke(packet.ProtobufBytes);

                    var fake = new FakePacket<CombatInvokeProcessor.CumbatInvukeNotif>()
                    {
                        Metadata = packet.Metadata,
                        PacketType = Opcode.CombatInvocationsNotify,
                        Sender = packet.Sender,
                        DummyPacketData = list.Body as CombatInvokeProcessor.CumbatInvukeNotif
                    };
                    Program.FrontendManager.AddGamePacket(fake);
                    return;
                }
                case Opcode.AbilityInvocationsNotify:
                {
                    var list = AbilityInvokeProcessor.ProcessAbilityInvoke(packet.ProtobufBytes);
                    var fake = new FakePacket<object>()
                    {
                        Metadata = packet.Metadata,
                        PacketType = Opcode.AbilityInvocationsNotify,
                        Sender = packet.Sender,
                        DummyPacketData = list.Body
                    };
                    Program.FrontendManager.AddGamePacket(fake);
                    return;
                }
                case Opcode.ClientAbilityInitFinishNotify:
                {
                    var cap = ClientAbilityProcessor.HandleClientAbilityInitFinish(packet.ProtobufBytes);
                    var fake = new FakePacket<ClientAbilityProcessor.ClintAbilityInFin>()
                    {
                        Metadata = packet.Metadata,
                        PacketType = Opcode.ClientAbilityInitFinishNotify,
                        Sender = packet.Sender,
                        DummyPacketData = cap
                    };
                    Program.FrontendManager.AddGamePacket(fake);
                    return;
                }
                case Opcode.ClientAbilityChangeNotify:
                {
                    var cap = ClientAbilityProcessor.HandleClientAbilityChange(packet.ProtobufBytes);
                    var fake = new FakePacket<ClientAbilityProcessor.ClintAbilityChaeg>()
                    {
                        Metadata = packet.Metadata,
                        PacketType = Opcode.ClientAbilityChangeNotify,
                        Sender = packet.Sender,
                        DummyPacketData = cap
                    };
                    Program.FrontendManager.AddGamePacket(fake);
                    return;
                }
                default:
                    Program.FrontendManager.AddGamePacket(packet);
                    break;
            }
        }
        catch (Exception e)
        {
            Log.Error(e.ToString());
        }
    }

    private class FakePacket<T> : Packet.Packet
    {
        public T DummyPacketData;

        public override object? GetObj(WsWrapper.WsType wsType)
        {
            if (wsType == WsWrapper.WsType.Iridium)
            {
                Dictionary<string, object> jsonobj = new();
                jsonobj.Add("packetID", (int)PacketType);
                jsonobj.Add("protoName", PacketType.ToString());
                jsonobj.Add("object", DummyPacketData);
                jsonobj.Add("packet", "");
                jsonobj.Add("source", (int)Sender);

                return jsonobj;
            }

            if (wsType == WsWrapper.WsType.DNToolKit)
            {
                Dictionary<string, object> jsonobj = new();
                jsonobj.Add("PacketHead", Metadata);
                jsonobj.Add("PacketData", DummyPacketData);
                jsonobj.Add("CmdID", PacketType.ToString());
                jsonobj.Add("Sender", (int)Sender);

                return jsonobj;
            }

            return null;
        }
    }
}