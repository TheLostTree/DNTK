using DNToolKit.AnimeGame;
using DNToolKit.Configuration.Models;
using DNToolKit.Net;

namespace DNToolKit
{
    /// <summary>
    /// The main entry point to record packets from the anime game.
    /// </summary>
    public class DNToolKit
    {
        private const string PCapFilter_ = "udp portrange 22101-22102";

        private readonly PCapSniffer _sniffer;
        private readonly AnimeGamePacketHandler _packetHandler;

        private readonly CancellationTokenSource _cts;

        /// <summary>
        /// The event to record every packet received without prior filtering.
        /// </summary>
        public event EventHandler<AnimeGamePacket>? PacketReceived;

        /// <summary>
        /// Creates a new instance of <see cref="DNToolKit"/>.
        /// </summary>
        /// <param name="config">The <see cref="SniffConfig"/> to setup the packet sniffing internally.</param>
        public DNToolKit(SniffConfig config)
        {
            _sniffer = new PCapSniffer(PCapFilter_);
            _packetHandler = new AnimeGamePacketHandler(_sniffer, config);

            _cts = new CancellationTokenSource();

            _packetHandler.PacketReceived += PacketHandler_PacketReceived;
            _packetHandler.KeyNotRecovered += PacketHandler_KeyNotRecovered;
        }

        /// <summary>
        /// Runs the async sniffing process indefinitely.
        /// </summary>
        /// <remarks>Invoke <see cref="Close"/> to stop sniffing packets.</remarks>
        public async Task RunAsync()
        {
            await Task.Run(_packetHandler.Initialize);

            _sniffer.Start();

            await Task.Delay(Timeout.Infinite, _cts.Token);
        }

        /// <summary>
        /// Stop all sniffing processes and cancel the <see cref="Task"/> run by <see cref="RunAsync"/>.
        /// </summary>
        public void Close()
        {
            _cts.Cancel();

            _packetHandler.PacketReceived -= PacketHandler_PacketReceived;
            _packetHandler.KeyNotRecovered -= PacketHandler_KeyNotRecovered;

            _sniffer.Close();
            _packetHandler.Close();
        }

        /// <summary>
        /// Passes on the packet from <see cref="AnimeGamePacketHandler"/> to <see cref="PacketReceived"/>.
        /// </summary>
        /// <param name="sender">The sender object.</param>
        /// <param name="packet">The <see cref="AnimeGamePacket"/> to pass on.</param>
        private void PacketHandler_PacketReceived(object? sender, AnimeGamePacket packet)
        {
            OnPacketReceived(packet);
        }

        /// <summary>
        /// Closes the <see cref="DNToolKit"/>.
        /// </summary>
        /// <param name="sender">The sender object.</param>
        /// <param name="e">The default <see cref="EventArgs"/></param>
        private void PacketHandler_KeyNotRecovered(object? sender, EventArgs e)
        {
            Close();
        }

        /// <summary>
        /// Passes on the <see cref="AnimeGamePacket"/> to <see cref="PacketReceived"/>.
        /// </summary>
        /// <param name="packet">The <see cref="AnimeGamePacket"/> to pass on.</param>
        private void OnPacketReceived(AnimeGamePacket packet)
        {
            PacketReceived?.Invoke(this, packet);
        }
    }
}
