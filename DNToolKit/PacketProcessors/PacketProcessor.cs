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
    private ValueFlag<MTKey> _sessionKey = new();
  

    private bool _useSessionKey = false;
    private ValueFlag<ulong> _tokenReqSendTime = new ValueFlag<ulong>();
    private ValueFlag<ulong> _tokenRspServerKey = new ValueFlag<ulong>();
    
    private Thread _workingThread;

    private byte _timesBFed;
    bool _running;

    private long count = 0;

    public int len()
    {
        return Queue.Count;
    }
    public PacketProcessor()
    {
        _running = true;
        //todo: take from a file
        ClientPrivate.FromXmlString(Program.Config.ClientPrivateRSA);
        
        _workingThread = new Thread(Work)
        {
            Name = "PacketProcessor",
        };
        _workingThread.Start();
        _timesBFed = 0;
    }

    public void Reset()
    {
        Queue.Clear();
        _tokenRspServerKey = new ValueFlag<ulong>();
        _tokenReqSendTime = new ValueFlag<ulong>();
        _useSessionKey = false;
        _sessionKey = new ValueFlag<MTKey>();
        _key = null;
        _timesBFed = 0;
        count = 0;
    }

    public void AddPacket(byte[] data, UdpHandler.Sender sender)
    {
        if(!_workingThread.IsAlive) _workingThread.Start();
        Queue.Enqueue(new EncryptedPacket(data, sender));
    }
    public void Stop()
    {
        if (_workingThread.IsAlive)
        {
            _running = false;
            _workingThread.Join();
            
            // if(!_workingThread.Join(10000)) _workingThread.Interrupt();
        }
        Log.Information("PacketProcessor stopped...");
        Log.Information($"{Queue.Count} packets leftover...");

    }

    private void Work()
    {
        while (_running)
        {
            while (Queue.TryDequeue(out var encryptedPacket))
            {

                // File.AppendAllText("./ihatelifept2.txt", $"{encryptedPacket}\n");

                    var item = encryptedPacket.Data;
                    {
                        if(!_useSessionKey){
                            _key ??= KeyRecovery.FindKey(item);
                            _key?.Crypt(item);
                        }
                        else
                        {
                            if(!_sessionKey.HasBeenSet())
                            {
                                Log.Debug("Bruteforcing Key...");
                                //Program.TestBF((long)tokenReqSendTime, tokenRspServerKey, item);
                                _timesBFed++;
                                Task.WaitAll(new Task[]
                                {
                                    _tokenReqSendTime.TaskFlag(),
                                    _tokenRspServerKey.TaskFlag()
                                });
                                _sessionKey.SetValue(KeyBruteForcer.BruteForce(item, (long)_tokenReqSendTime.Value, _tokenRspServerKey.Value));
                            }
                            if(!_sessionKey.HasBeenSet()) Log.Warning("something went wrong!");
                            _sessionKey.Value?.Crypt(item);
                            
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
                        else if(!_sessionKey.HasBeenSet())
                        {
                            //we may need to bruteforce
                            Log.Warning("Encrypted Packet got through lol");
                            // _sessionKey.TaskFlag().Wait();
                            //should be fine because we store the time 
                            Queue.Enqueue(encryptedPacket);
                        }
                        else
                        {
                          Log.Warning("There was a false positive with the bruteforcer somehow");
                          Log.Information("@{slay}" ,encryptedPacket.Data);
                        }
                    }
                }
            Thread.Sleep(50);
            // Log.Debug("hi");

        }
        
        Log.Debug("hadfasfadsi");

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

            Log.Information($"{count++} {type}");

            if (type == Opcode.GetPlayerTokenRsp)
            {
                //ideally we do it based on tokenreq but unless your ping is like 3000 we should be fine
                _tokenReqSendTime.SetValue(packet.Metadata.SentMs);
                
                var tokenRsp = packet.PacketData as GetPlayerTokenRsp;
                if (tokenRsp?.EncryptedSeed is not null)
                {
                    var key = ClientPrivate.Decrypt(Convert.FromBase64String(tokenRsp.EncryptedSeed), RSAEncryptionPadding.Pkcs1);
                    _tokenRspServerKey.SetValue(key.GetUInt64(0,true));
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

    private class FakeCINPacket: Packet.Packet
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

    private class FakeAINPacket: Packet.Packet
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