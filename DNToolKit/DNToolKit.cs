
using SharpPcap.LibPcap;

namespace DNToolKit
{
    /// <summary>
    /// The main entry point to record packets from the anime game.
    /// </summary>
    public class DNToolKit
    {
        private const string PCapFilter_ = "udp portrange 22101-22102";

        public static void Main(string[] args)
        {
            Console.WriteLine(":(");
        }
        public static IEnumerable<PcapInterface> GetAllNetworkInterfaces()
        {
            return PcapInterface.GetAllPcapInterfaces();
        }

    }
}
