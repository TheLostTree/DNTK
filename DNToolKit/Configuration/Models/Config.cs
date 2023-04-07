using DNToolKit.Net;

namespace DNToolKit.Configuration.Models
{
    /// <summary>
    /// Standard model for basic configuration values the library needs.
    /// </summary>
    public class Config
    {
        /// <summary>
        /// The configuration passed to the <see cref="PCapSniffer"/>.
        /// </summary>
        public SniffConfig SniffConfig { get; set; } = new();
    }
}
