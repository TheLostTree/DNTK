using PacketDotNet;
using SharpPcap;

namespace DNToolKit.Net.Events
{
    /// <summary>
    /// The <see cref="EventArgs"/> used for <see cref="PCapSniffer.PacketReceived"/>.
    /// </summary>
    public class PacketReceivedEventArgs : EventArgs
    {
        /// <summary>
        /// The raw captured packet.
        /// </summary>
        public RawCapture RawCapture { get; }

        /// <summary>
        /// The link layers the packet is valid for.
        /// </summary>
        public LinkLayers LinkLayers { get; }

        /// <summary>
        /// Creates a new instance of <see cref="PacketReceivedEventArgs"/>.
        /// </summary>
        /// <param name="rawCapture">The raw captured packet.</param>
        /// <param name="linkLayers">The link layers the packet is valid for.</param>
        public PacketReceivedEventArgs(RawCapture rawCapture, LinkLayers linkLayers)
        {
            RawCapture = rawCapture;
            LinkLayers = linkLayers;
        }
    }
}
