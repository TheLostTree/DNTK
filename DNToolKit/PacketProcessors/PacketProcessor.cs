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
                // todo: fix this later its probably prone to a race condition and is not thread safe
                try
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
                    
                }
                catch(Exception e)
                {
                    Log.Error(e.ToString());
                }
            };
        
            if (type == Opcode.UnionCmdNotify)
            {
                UnionCmdProcessor.ProcessUnion(packet);
                return;
            }
            
            Program.Dumper.AddPacketData(packet.FullData, packet.Sender);
            Program.FrontendManager.AddGamePacket(packet);
        }
        catch(Exception e)
        {
            Log.Error(e.ToString());
        }


    }
}