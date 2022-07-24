using System.Collections.Concurrent;
using System.Diagnostics;
using Common.Protobuf;
using DNToolKit.Packet;
using Serilog;

namespace DNToolKit.PacketProcessors;

public class PacketProcessor
{
    public ConcurrentQueue<byte[]> Queue = new();
    private bool running = false;
    
    private MTKey? _key;
    private MTKey? _sessionKey;

    private bool _useSessionKey = false;
    public PacketProcessor()
    {
        running = true;
        Task.Run(Work);
    }

    public void AddPacket(byte[] data)
    {
        Queue.Enqueue(data);
    }

    public void Stop()
    {
        running = false;
    }

    private async Task Work()
    {
        while (running)
        {
            while (Queue.TryDequeue(out var item))
            {

                {
                    if(!_useSessionKey){
                        _key ??= KeyRecovery.FindKey(item);
                        _key?.Crypt(item);
                    }
                    else
                    {
                        _sessionKey.Crypt(item);
                    }
                    if (item.GetUInt16(0, true) == 0x4567)
                    {
                        DoStuffWithValidPacket(item);
                    }
                    else if(!_useSessionKey)
                    {
                        //we may need to bruteforce
                        Log.Information("Bruteforcing...");
                        _sessionKey = KeyBruteForcer.BruteForce(item);
                        _useSessionKey = true;
                    }
                    else
                    {
                        Console.WriteLine(":(");
                    }
                    
                }
            }
        }

        await Task.Delay(5);
        _ = Task.Run(Work);
    }

    
    //todo: rename
    public void DoStuffWithValidPacket(byte[] data)
    {
        Console.WriteLine((Opcodes)data.GetUInt16(2, true));
    }

}