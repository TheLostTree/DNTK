using DNToolKit.Packet;
using Serilog;

namespace DNToolKit;


public static class RandomSafeUInt64
{
    public static ulong NextSafeUInt64(this Random rand) => (ulong)(rand.NextDouble() * ulong.MaxValue);
}

public class KeyBruteForcer
{
    public static List<long> prevSeeds = new();

    /// <summary>
    /// Tries to guess the seed based on our arguments
    /// </summary>
    /// <param name="testBuffer">Key test buffer</param>
    /// <param name="ts">Client timestamp from tokenreq header</param>
    /// <param name="serverKey">Server random key from tokenrsp</param>
    /// <param name="depth">How much seeds to generate with same random gen</param>
    /// <returns></returns>
    public static MTKey? Guess(byte[] testBuffer, long ts, ulong serverKey, int depth) {
        // First line of defense
        var keyPrefix = new byte[] { (byte)(testBuffer[0] ^ 0x45), (byte)(testBuffer[1] ^ 0x67) };
        // Just to be extra sure, if generating keys for too long, keyPrefix alone check could pass false positives
        // Though for normal use case it's surely overkill
        var keySuffix = new byte[] { (byte)(testBuffer[testBuffer.Length - 2] ^ 0x89), (byte)(testBuffer[testBuffer.Length - 1] ^ 0xAB) };
        var rand = new Random((int)ts);

        // Check up to depth since static random in client is reused on exiting coop and relogin to server
        for (int i = 0; i < depth; i++) {
            var clientSeed = rand.NextSafeUInt64();
            var seed = serverKey ^ clientSeed;
            
            var key = MTKey.PartialKey(seed, 8);
            if (key[0] == keyPrefix[0] && key[1] == keyPrefix[1])
            {
                // If prefix is OK, let's check against suffix just to be sure
                var full = new MTKey(seed);
                if (full.Bytes[(testBuffer.Length - 2) % 4096] == keySuffix[0] && full.Bytes[(testBuffer.Length - 1) % 4096] == keySuffix[1])
                {
                    Log.Debug("Seed found!  {DATA}", seed);
                    Log.Debug("Params: @{testBuffer} : {ts} : {serverKey} : x{i}", testBuffer, ts, serverKey, i);
                    return full;
                }
            }
        }
        return null;
    }

    /// <summary>
    /// Bruteforces seed from BF history and our args
    /// </summary>
    /// <param name="testBuffer">new key test buffer</param>
    /// <param name="senttime">get this from tokenreq header</param>
    /// <param name="serverKey">get this from tokenrsp</param>
    /// <returns></returns>
    public static MTKey? BruteForce(byte[] testBuffer, long senttime, ulong serverKey)
    {
        // Check against already guessed seeds
        foreach (var oldSeed in prevSeeds) {
            var key = Guess(testBuffer, oldSeed, serverKey, 1000);
            if (key != null) { // Guess is correct
                return key;
            }
        }

        // Check against our arguments with ts offset
        for (long count = 0; count < 3000; count ++)
        {
            //this will alternate negative and positive per iteration
            long offset = count % 2 == 1 ? -1 *(count / 2) : count / 2;
            var key = Guess(testBuffer, senttime + offset, serverKey, 1000);
            if (key != null) { // Guess is correct
                prevSeeds.Add(senttime + offset); // Save ts of static random
                return key;
            }
        }

        // If we still haven't returned the correct key, that's sad
        Log.Error($"Cannot find seed! @{testBuffer} : {senttime} : {serverKey}");
        return null;
    }
}

