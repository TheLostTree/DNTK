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

        // Console.WriteLine(senttime);


        long recvTime = senttime;

        var keyPrefix = new byte[] { (byte)(testBuffer[0] ^ 0x45), (byte)(testBuffer[1] ^ 0x67) };
        // Log.Information("KeyPrefix: @{DATA}", keyPrefix);
        // Log.Information("SentTime: {DATA}", senttime);
        // Log.Information("ServerKey: {DATA}", serverKey);
        //ending magic 
        //i'd do this but then i'd have to generate much more of the key, up to the entire goddamn key sometimes
        //var keySuffix = new byte[] { (byte)(testBuffer[^1] ^ 0x89), (byte)(testBuffer[^0] ^ 0xAB) };

        for (long offset = 0; offset < 3000; offset++)
        {
            var rand = new Random((int)(recvTime + offset));
            var clientSeed = rand.NextSafeUInt64();
            var seed = serverKey ^ clientSeed;
            //yep i dont even know why i bothered
            var key = MTKey.PartialKey(seed, 8);
            // var key = new MTKey(seed);
            if (key[0] == keyPrefix[0] && key[1] == keyPrefix[1])
            {
                Log.Debug("Seed Found!  {DATA}", seed);
                return new MTKey(seed);
            }
            
            //todo: yeah this is ugly but moving it all into a different function is also cringe
            var rand2 = new Random((int)(recvTime - offset));
            var clientSeed2 = rand2.NextSafeUInt64();
            var seed2 = serverKey ^ clientSeed2;
            var key2 = MTKey.PartialKey(seed2, 8);
            if (key2[0] == keyPrefix[0] && key2[1] == keyPrefix[1])
            {
                Log.Debug("Seed Found!  {DATA}", seed2);
                return new MTKey(seed2);
            }
        }
        Log.Error($"Cannot find seed!");
        return null;
        
        // for (long time = recvTime; time > recvTime - 20000; time--)
        // {
        //     var rand = new Random((int)time);
        //
        //     var clientSeed = rand.NextSafeUInt64();
        //     var seed = serverKey ^ clientSeed;
        //
        //     //yep i dont even know why i bothered
        //     var key = MTKey.PartialKey(seed, 8);
        //     // var key = new MTKey(seed);
        //     if (key[0] == keyPrefix[0] && key[1] == keyPrefix[1])
        //     {
        //         Log.Information("Seed Found!  {DATA}", seed);
        //
        //         return new MTKey(seed);
        //     }
        // }

        Log.Error($"Cannot find seed!");
        return null;
    }
}

