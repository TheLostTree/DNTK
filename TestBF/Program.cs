namespace TestBF
{
    internal class Program
    {
        static void Main(string[] args)
        {

            // byte[] testBuffer = { 0x92, 0xd7 };
            // long sentTime = 1674541770487;
            // ulong serverSeed = 12441263512101026506;
            byte[] testBuffer = { 52, 128 };
            long sentTime = 1675390744673;
            ulong serverSeed = 12553093654351998741;
            KeyBruteForcer.BruteForce(testBuffer, sentTime, serverSeed);
        }
    }
}