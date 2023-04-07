using DNToolKit.Net.Events;
using PacketDotNet;
using Serilog;

namespace DNToolKit.Net
{
    /// <summary>
    /// A handler that processes UDP packages from a <see cref="PCapSniffer"/>.
    /// </summary>
    public abstract class UdpHandler : IDisposable
    {
        private PCapSniffer? _sniffer;

        /// <summary>
        /// Declares, if this instance was already disposed.
        /// </summary>
        public bool IsDisposed { get; private set; }

        /// <summary>
        /// Create a new instance of <see cref="UdpHandler"/>.
        /// </summary>
        /// <param name="sniffer">The <see cref="PCapSniffer"/> to receive network packets from.</param>
        public UdpHandler(PCapSniffer sniffer)
        {
            _sniffer = sniffer;
            _sniffer.PacketReceived += PacketReceived;
        }

        /// <summary>
        /// Closes this instance.
        /// </summary>
        public void Close()
        {
            Dispose();
        }

        /// <summary>
        /// Disposes this instance.
        /// </summary>
        public void Dispose()
        {
            AssertDisposed();

            DisposeInternal();

            if (_sniffer != null)
            {
                _sniffer.PacketReceived -= PacketReceived;
                _sniffer = null;
            }

            IsDisposed = true;
        }

        /// <summary>
        /// Dispose dependencies and resources of inheriting instances.
        /// </summary>
        protected virtual void DisposeInternal() { }

        /// <summary>
        /// Process the extracted <see cref="UdpPacket"/>.
        /// </summary>
        /// <param name="packet">The <see cref="UdpPacket"/> to process.</param>
        protected abstract void ProcessUdpPacket(UdpPacket packet);

        /// <summary>
        /// Delegate to receive sniff and extract the underlying <see cref="UdpPacket"/>.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void PacketReceived(object? sender, PacketReceivedEventArgs e)
        {
            AssertDisposed();

            switch (e.LinkLayers)
            {
                case LinkLayers.Ethernet:
                case LinkLayers.RawLegacy:
                    var udpPacket = ExtractUdpPacket(e.RawCapture.Data, e.LinkLayers);
                    ProcessUdpPacket(udpPacket);
                    return;

                default:
                    Log.Warning("unknown link layer {LinkLayers}", e.LinkLayers);
                    return;
            }
        }

        /// <summary>
        /// Assert, if this instance is disposed.
        /// </summary>
        /// <exception cref="ObjectDisposedException">If this instance is disposed.</exception>
        private void AssertDisposed()
        {
            if (IsDisposed)
                throw new ObjectDisposedException(nameof(UdpHandler));
        }

        /// <summary>
        /// Extract the <see cref="UdpPacket"/> from the sniffed traffic.
        /// </summary>
        /// <param name="data">The data to extract the <see cref="UdpPacket"/>from.</param>
        /// <param name="layers">The link layers from which the traffic was received.</param>
        /// <returns>The extracted <see cref="UdpPacket"/>.</returns>
        private UdpPacket ExtractUdpPacket(byte[] data, LinkLayers layers)
        {
            return Packet.ParsePacket(layers, data).Extract<IPv4Packet>().Extract<UdpPacket>();
        }
    }
}
