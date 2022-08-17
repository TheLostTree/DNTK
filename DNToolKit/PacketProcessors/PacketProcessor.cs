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
    private bool _running = false;

    private static readonly RSA ClientPrivate = RSA.Create();
    private MTKey? _key;
    private MTKey? _sessionKey = null;
  

    private bool _useSessionKey = false;
    private ulong _tokenReqSendTime;
    private ulong _tokenRspServerKey;
    private Thread _workingThread;

    private byte _timesBFed;

    public PacketProcessor()
    {
        _running = true;
        
        //todo: take from a file
        ClientPrivate.FromXmlString(Program.Config.ClientPrivateRSA);
        
        _workingThread = new Thread(Work)
        {
            Name = "PacketProcessor",
        };
        
        _timesBFed = 0;
    }

    public void Reset()
    {
        Queue.Clear();
    }

    public void AddPacket(byte[] data, UdpHandler.Sender sender)
    {
        if (!_running) return;
        if(!_workingThread.IsAlive) _workingThread.Start();
        Queue.Enqueue(new EncryptedPacket(data, sender));
    }

    public void Stop()
    {
        _running = false;
        if (_workingThread.IsAlive)
        {
            if(!_workingThread.Join(10000)) _workingThread.Interrupt();
        }
        Log.Information("PacketProcessor stopped...");

    }

    private void Work()
    {
        while (_running)
        {
            while (Queue.TryDequeue(out var encryptedPacket))
            {
                var item = encryptedPacket.Data;
                {
                    if(!_useSessionKey){
                        _key ??= KeyRecovery.FindKey(item);
                        _key?.Crypt(item);
                    }
                    else
                    {
                        if(_sessionKey is null)
                        {
                            Log.Debug("Bruteforcing Key...");
                            //Program.TestBF((long)tokenReqSendTime, tokenRspServerKey, item);
                            _timesBFed++;
                            _sessionKey = KeyBruteForcer.BruteForce(item, (long)_tokenReqSendTime, _tokenRspServerKey);
                        }
                        if(_sessionKey is null) Log.Warning("something went wrong!");
                        _sessionKey?.Crypt(item);
                        if (_timesBFed > 10)
                        {
                            Log.Error("Brute forcing has failed many times, so make sure you login on a freshly launched client. Or something else could have happened idk");
                            Program.Stop();
                        }
                    }
                    if (item.GetUInt16(0, true) == 0x4567)
                    {
                        ParsePacketFromData(encryptedPacket);
                    }
                    else if(_sessionKey is null)
                    {
                        //we may need to bruteforce
                        Log.Warning("Encrypted Packet got through lol");
                        //should be fine because we store the time 
                        Queue.Enqueue(encryptedPacket);
                    }
                    else
                    {
                      Log.Warning("There was a false positive with the bruteforcer somehow");
                    }
                }
            }
            Thread.Sleep(50);
        }

        // SpinWait.SpinUntil(()=>Queue.IsEmpty);
    }
    
    private void ParsePacketFromData(EncryptedPacket encryptedPacket)
    {

        //todo: i think i need to handle exceptions but i *did* just check packet magic earlier so idk
        try
        {
            //this is SO UGLY
            
            var packet = new Packet.Packet(encryptedPacket.Data)
            {
                Sender = encryptedPacket.Sender
            };
            
            var type = packet.PacketType;
            if (type == Opcode.GetPlayerTokenReq)
            {
                _tokenReqSendTime = packet.Metadata.SentMs;
            };
            if (type == Opcode.GetPlayerTokenRsp)
            {
                var tokenRsp = packet.PacketData as GetPlayerTokenRsp;
                if (tokenRsp?.EncryptedSeed is not null)
                {
                    var key = ClientPrivate.Decrypt(Convert.FromBase64String(tokenRsp.EncryptedSeed), RSAEncryptionPadding.Pkcs1);
                    _tokenRspServerKey = key.GetUInt64(0,true);
                    _useSessionKey = true;
                }
                else
                {
                    Log.Warning("failed to get serverSeed");
                }
            };
        
            if (type == Opcode.UnionCmdNotify)
            {
                UnionCmdProcessor.ProcessUnion(packet);
                return;
            }
            
            if (type == Opcode.CombatInvocationsNotify)
            {
                var list = CombatInvokeProcessor.ProcessCombatInvoke(packet.ProtobufBytes);
                var fake = new FakeCINPacket()
                {
                    Metadata = packet.Metadata,
                    PacketType = Opcode.CombatInvocationsNotify,
                    Sender = packet.Sender,
                    DummyPacketData = list.Body as CombatInvokeProcessor.CumbatInvukeNotif
                };
                Program.FrontendManager.AddGamePacket(fake);
                return;
            }
            
            if (type == Opcode.AbilityInvocationsNotify)
            {
                var list = AbilityInvokeProcessor.ProcessAbilityInvoke(packet.ProtobufBytes);
                var fake = new FakeAINPacket()
                {
                    Metadata = packet.Metadata,
                    PacketType = Opcode.AbilityInvocationsNotify,
                    Sender = packet.Sender,
                    DummyPacketData = list.Body as AbilityInvokeProcessor.ObilityInvokeNotify
                };
                Program.FrontendManager.AddGamePacket(fake);
                return;
            }

            Program.FrontendManager.AddGamePacket(packet);
        }
        catch(Exception e)
        {
            Log.Error(e.ToString());
        }


    }
    
    public class FakeCINPacket: Packet.Packet
    {
        public CombatInvokeProcessor.CumbatInvukeNotif DummyPacketData;
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
    
    public class FakeAINPacket: Packet.Packet
    {
        public AbilityInvokeProcessor.ObilityInvokeNotify DummyPacketData;
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