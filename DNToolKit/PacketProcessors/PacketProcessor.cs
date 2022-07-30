using System.Buffers.Text;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Text.Json;
using Common;
using Common.Protobuf;
using DNToolKit.Packet;
using DNToolKit.Sniffer;

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
        ClientPrivate.FromXmlString(
            "<RSAKeyValue><Modulus>02M1I1V/YvxANOvLFX8R7D8At40IlT7HDWpAW3t+tAgQ7sqjCeYOxiXqOaaw2kJhM3HT5nZll48UmykVq45Q05J57nhdSsGXLJshtLcTg9liMEoW61BjVZi9EPPRSnE05tBJc57iqZw+aEcaSU0awfzBc8IkRd6+pJ5iIgEVfuTluanizhHWvRli3EkAF4VNhaTfP3EkYfr4NE899aUeScbbdLFI6u1XQudlJCPTxaISx5ZcwM+nP3v242ABcjgUcfCbz0AY547WazK4bWP3qicyxo4MoLOoe9WBq6EuG4CuZQrzKnq8ltSxud/6chdg8Mqp/IasEQ2TpvY78tEXDQ==</Modulus><Exponent>AQAB</Exponent><P>9ci4i5gUVSGo3PkIpTTXiNm7pCXTPlkDTxXzhxMlx8sgrh7auoLwMVOV0DQW1V84a3RXTwf/HalEKEY69TAYbmef0OqqHoGMHJStbjPaGdfNPdm5IOHp5qmIIHWOX2Z4nSyeEXY+z+GpYYvZvdKQIJ73SpVPM5U54s7phQIg6r0=</P><Q>3Cx9CQCr/THDyd5EY1OudeKa9tL5Vc8gXfzCJ2WO5s03sNjlwgVNAmudMFYpu7P+31onxBfpMUvRyL/2+E8mhOF8vXa8vaRYZiBaRZE+apoFbfLPsezmu37G4ff/sDnDm+aQSDU1kmCewnSsxRO7VDo8zkIGDo6nIdjhOEFvypE=</Q><DP>ML8ciuMgtTm1yg3CPzHZxZSZeJbf7K+uzlKmOBX+GkAZPS91ZiRuCvpu7hpGpQ77m6Q5ZL1LRdC6adpz+wkM72ix87d3AhHjfg+mzgKOsS1x0WCLLRBhWZQqIXXvRNCH/3RH7WKsVoKFG4mnJ9TJLQ8aMLqoOKzSDD/JZM3lRWk=</DP><DQ>PIZ+WNs2bIQhrnzLkAKRExcYQoH8yPoHi87QEMR6ZDhF9vepMY0DfobWz1LgZhk1F3FRPTbVhBezs9wRqHEZxa22/N6HRBrJsklyh21GG0f79h2put/FDgXr5nKmd2tpupHHWBJIh9THz+0DEao69QyNaqX7xESy7TsRrsVOVgE=</DQ><InverseQ>mlWr8mOkpY92UUO4ipPXx5IHv2xZfs4QDcUX1lTmDAvJg9oBw7KvQiHQqdTINLSaVi2hoMgzNZIAoWWLH3+I0cRwuHM7wLaD0pcVlxdpy99aid75Nmc83GuBkhwCJ6HVwayrLWr+UiCqLFik9mMrMYB5QPUptn+J9PRoxW7JRB4=</InverseQ><D>uLj7GJOALEnu+dALug8+5EnyIHQ4SeOAIrL05ny2rjBWS7X8X4wQ4QsE8bg+15wmQMR5ve08vgKkqSpv62kELL7VmpTIQamGp84w2DEb9p4idbxo5t1q0MQWhBfsjrb62bCuX0E7JaiJyKpJyEB+34I2sye2dvA9fLGDY9+6nxVkkspoBaPkqEvwShK9tNJaUQP6Ghl4h3MiDoyYnT+m+1BnrO7oTF1Ly636M5grEqrJcVzuVJOVzf31peC8Qhl+5qTXz2SE+WAUox5YhZDZcSI8iYPDkSxovNjNnLssad/a/dxermgoy7W/q3cJRrq+56YF1JCn1kCX/VhO7mq+gQ==</D></RSAKeyValue>"
        );
        
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
    }

    public void AddPacket(byte[] data, UdpHandler.Sender sender)
    {
        Queue.Enqueue(new EncryptedPacket(data, sender));
    }

    public void Stop()
    {
        _running = false;
        _workingThread.Join();
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
                            Log.Information("Bruteforcing Key...");
                            //Program.TestBF((long)tokenReqSendTime, tokenRspServerKey, item);
                            _timesBFed++;
                            _sessionKey = KeyBruteForcer.BruteForce(item, (long)_tokenReqSendTime, _tokenRspServerKey);
                        }
                        if(_sessionKey is null) Log.Warning("you suck!");
                        _sessionKey?.Crypt(item);
                        if (_timesBFed > 10)
                        {
                            Log.Error("Failed so many times lets just our cut losses");
                            Stop();

                        }
                    }
                    if (item.GetUInt16(0, true) == 0x4567)
                    {
                        ParsePacketFromData(encryptedPacket);
                    }
                    else if(_sessionKey is null)
                    {
                        //we may need to bruteforce
                        Log.Warning("Encrypted Packet got through...");
                        //should be fine because we store the time 
                        Queue.Enqueue(encryptedPacket);
                    }
                    else
                    {
                      Log.Warning("weird...");
                    }
                }
            }
        }
    }

    
    //todo: rename
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

            Program.FrontendManager.AddGamePacket(packet);
        }
        catch(Exception e)
        {
            Log.Error(e.ToString());
        }


    }
}