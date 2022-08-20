using System.Collections.Concurrent;

namespace DNToolKit.Net;

public class Gcp
{
    private const int GCP_OVERHEAD = 28;
    private const int GCP_CMD_PUSH = 81;

    private readonly BlockingCollection<byte[]> _packets = new();

    private readonly Queue<byte[]> fragments = new();

    public void Input(byte[] data)
    {
        var dataSpan = data.AsSpan();
        while (dataSpan.Length >= GCP_OVERHEAD)
        {
            var cmd = dataSpan[8];
            var frg = dataSpan[9];
            
            var len = BitConverter.ToUInt32(dataSpan[24..]);

            var packetSize = GCP_OVERHEAD + (int)len;

            var pktdata = dataSpan[GCP_OVERHEAD..packetSize].ToArray();
            
            
            if (cmd == GCP_CMD_PUSH)
                fragments.Enqueue(pktdata);
                if (frg == 0)
                {
                    byte[] combined = Array.Empty<byte>();
                    while (fragments.TryDequeue(out var a))
                    {
                        combined = combined.Concat(a).ToArray();
                    }
                    if(combined != Array.Empty<byte>()) _packets.Add(combined);
                }

                dataSpan = dataSpan[packetSize..];
        }
    }
    

    public byte[]? Recv(int timeout)
    {
        _packets.TryTake(out byte[]? data, timeout);
        return data;
    }

    public Task<byte[]> Recv() => Task.Run(() => _packets.Take());
}
