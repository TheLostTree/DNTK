using DNToolKit.Packet;

namespace DNToolKit;


public static class RandomSafeUInt64
{
    public static ulong NextSafeUInt64(this Random rand) => (ulong)(rand.NextDouble() * ulong.MaxValue);
}

public class KeyBruteForcer
{
    public static MTKey? BruteForce(byte[] testBuffer, ulong senttime = 1)
    {
        //long recvTime = DateTime.Now.Ticks + 10000;

        long recvTime = (long)senttime;

        var keyPrefix = new byte[] { (byte)(testBuffer[0] ^ 0x45), (byte)(testBuffer[1] ^ 0x67) };
        
        //ending magic 
        var keySuffix = new byte[] { (byte)(testBuffer[^1] ^ 0x89), (byte)(testBuffer[^0] ^ 0xAB) };

        // var keypos = testBuffer.Length % 4096;
        
        for (long time = recvTime; time > recvTime - 20000; time--)
        {
            var rand = new Random((int)time);

            var clientSeed = rand.NextSafeUInt64();
            var seed = 5518277363375230666ul ^ clientSeed;

            // var key = MTKey.PartialKey(seed, testBuffer.Length);
            var key = new MTKey(seed);
            
            if (key.Bytes[0] == keyPrefix[0]
                && key.Bytes[1] == keyPrefix[1]
                // && key.Bytes[testBuffer.Length-1] == keySuffix[0]
                // && key.Bytes[testBuffer.Length] == keySuffix[1]
                )
            {
                //todo: make sure whole packet is valid tbh?
                Console.WriteLine($"Seed found: {seed}");
                return key;
            }
        }

        Console.WriteLine($"Cannot find seed!");
        return null;
    }
}

