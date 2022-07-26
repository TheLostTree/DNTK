using DNToolKit.Packet;
using Serilog;

namespace DNToolKit;


public static class RandomSafeUInt64
{
    public static ulong NextSafeUInt64(this Random rand) => (ulong)(rand.NextDouble() * ulong.MaxValue);
}

public class KeyBruteForcer
{
    /// <summary>
    /// 
    /// </summary>
    /// <param name="testBuffer">new key test buffer</param>
    /// <param name="senttime">get this from tokenreq header</param>
    /// <param name="serverKey">get this from tokenrsp</param>
    /// <returns></returns>
    public static MTKey? BruteForce(byte[] testBuffer, long senttime, ulong serverKey)
    {
        //long recvTime = DateTime.Now.Ticks + 10000;

        Console.WriteLine(senttime);


        long recvTime = senttime + 10000;

        var keyPrefix = new byte[] { (byte)(testBuffer[0] ^ 0x45), (byte)(testBuffer[1] ^ 0x67) };
        // Log.Information("KeyPrefix: @{DATA}", keyPrefix);
        // Log.Information("SentTime: {DATA}", senttime);
        // Log.Information("ServerKey: {DATA}", serverKey);
        //ending magic 
        //var keySuffix = new byte[] { (byte)(testBuffer[^1] ^ 0x89), (byte)(testBuffer[^0] ^ 0xAB) };

        
        
        for (long time = recvTime; time > recvTime - 20000; time--)
        {
            var rand = new Random((int)time);

            var clientSeed = rand.NextSafeUInt64();
            var seed = serverKey ^ clientSeed;

            // var key = MTKey.PartialKey(seed, testBuffer.Length);
            var key = new MTKey(seed);
            if (key.Bytes[0] == keyPrefix[0] && key.Bytes[1] == keyPrefix[1])
            {
                return key;
            }
        }

        Console.WriteLine($"Cannot find seed!");
        return null;
    }
}

