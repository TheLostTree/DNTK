using System.Collections.Concurrent;

using DNToolKit.Packet;

namespace DNToolKit.PacketProcessors;

public class PacketProcessor
{
    public ConcurrentQueue<byte[]> Queue = new();
    private bool running = false;
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
                ProcessEncryptedBytes(item);
            }
        }

        await Task.Delay(5);
        _ = Work();
    }

    private void ProcessEncryptedBytes(byte[] bytes)
    {
        if (bytes.GetUInt16(0, true) == 0x4567)
        {
            //todo: process
            return;
        }
        var key = KeyRecovery.FindKey(bytes);
        if(key is not null)
        {
            key.Crypt(bytes);
            //todo: process bytes
            return;
        }
        
        //todo: add bruteforce alg
        
    }
}