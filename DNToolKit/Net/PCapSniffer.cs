using System.Net.NetworkInformation;
using DNToolKit.Net.Events;
using PacketDotNet;
using Serilog;
using SharpPcap;
using SharpPcap.LibPcap;

namespace DNToolKit.Net
{
    /// <summary>
    /// A sniffer using PCap to record network packets.
    /// </summary>
    public class PCapSniffer : IDisposable
    {
        private readonly string? _filterExpression;

        private LibPcapLiveDevice? _pCapDevice;
        private LinkLayers _layers;
        private readonly PcapInterface? _pcapInterface;

        /// <summary>
        /// Declares, if this instance was already disposed.
        /// </summary>
        public bool IsDisposed { get; private set; }


        /// <summary>
        /// The event to pass on network packets.
        /// </summary>
        public event EventHandler<PacketReceivedEventArgs>? PacketReceived;

        /// <summary>
        /// Creates a new instance of <see cref="PCapSniffer"/>.
        /// </summary>
        /// <param name="choose">Whether or not the network interface will be automatically determined, or manually chosen.</param>
        /// <param name="filterExpression">The filter to setup the sniffer.</param>
        /// <remarks>Refer to https://www.tcpdump.org/manpages/pcap-filter.7.html for valid filter expression syntax.</remarks>
        public PCapSniffer(string? filterExpression = null)
        {
            _filterExpression = filterExpression;
        }
        
        public PCapSniffer(PcapInterface @interface, string? filterExpression = null)
        {
            this._pcapInterface = @interface;
            _filterExpression = filterExpression;
        }
        

        /// <summary>
        /// Start listening to the first outgoing and ready PCap device available.
        /// </summary>
        /// <exception cref="InvalidOperationException">If no PCap device could be selected.</exception>
        public void Start()
        {
            AssertDisposed();

            if (_pCapDevice != null)
                return;

            Log.Information("SharpPcap {Version}, StartLiveCapture", (object)Pcap.SharpPcapVersion);

            if (_pcapInterface is null)
            {
                (_pCapDevice, _layers) = ChoosePcapDevice();
            }
            else
            {
                _pCapDevice = new LibPcapLiveDevice(_pcapInterface);
                _pCapDevice.Open();
                _layers = _pCapDevice.LinkType;
                
            }

            
            if (_pCapDevice == null)
                throw new InvalidOperationException("No PCap device found.");

            StartCapture(_pCapDevice);
            Console.WriteLine("after capture");
        }

        /// <summary>
        /// Stop listening to the current PCap device.
        /// </summary>
        public void Close()
        {
            Dispose();
        }

        /// <summary>
        /// Dispose of this instance
        /// </summary>
        public void Dispose()
        {
            AssertDisposed();
            _pCapDevice?.StopCapture();

            IsDisposed = true;
        }

        /// <summary>
        /// Passes on the captures packet to <see cref="PacketReceived"/>.
        /// </summary>
        /// <param name="packet">The captures packet to pass on.</param>
        protected virtual void OnPacketReceived(PacketCapture packet)
        {
            PacketReceived?.Invoke(this, new PacketReceivedEventArgs(packet.GetPacket(), _layers));
        }

        /// <summary>
        /// Start capturing with the selected PCap device
        /// </summary>
        /// <param name="pCapDevice">The device to open and capture.</param>
        private void StartCapture(LibPcapLiveDevice pCapDevice)
        {
            pCapDevice.OnPacketArrival += (_, c) => OnPacketReceived(c);

            pCapDevice.Open(DeviceModes.Promiscuous | DeviceModes.DataTransferUdp | DeviceModes.NoCaptureLocal);
            pCapDevice.Filter = _filterExpression;
            pCapDevice.StartCapture();

            Log.Information("-- Listening on {Name} {Description}", pCapDevice.Name, pCapDevice.Description);
        }

        /// <summary>
        /// Assert if this instance was already disposed.
        /// </summary>
        /// <exception cref="ObjectDisposedException"></exception>
        private void AssertDisposed()
        {
            if (IsDisposed)
                throw new ObjectDisposedException(nameof(PCapSniffer));
        }

        /// <summary>
        /// Get an outgoing and ready PCap device.
        /// </summary>
        /// <returns>The PCap device and its link type.</returns>
        /// <exception cref="InvalidOperationException">If no outgoing or ready PCap device was found.</exception>
        /// <remarks>taken from devove's proj and adjusted for readability.</remarks>
        private static (LibPcapLiveDevice, LinkLayers) GetPcapDevice()
        {
            var networkInterfaces = NetworkInterface.GetAllNetworkInterfaces();
            var pcapInterfaces = PcapInterface.GetAllPcapInterfaces();

            foreach (var pCapInterface in pcapInterfaces)
            {
                // Ignore local interfaces
                if (!IsOutgoingPCapInterface(pCapInterface))
                    continue;

                // Ignore when no network interface is found
                var networkInterface = networkInterfaces.FirstOrDefault(ni => ni.Name == pCapInterface.FriendlyName);
                if (networkInterface is not { OperationalStatus: OperationalStatus.Up })
                    continue;

                using var device = new LibPcapLiveDevice(pCapInterface);

                try
                {
                    device.Open();
                }
                catch (PcapException ex)
                {
                    Log.Fatal(ex, "Could not open PCap Device");
                    continue;
                }

                var linkType = device.LinkType;
                if (linkType is LinkLayers.Ethernet or LinkLayers.RawLegacy)
                    return (device, linkType);

                Log.Information("Ignore device. Description: {Description}; LinkType: {LinkType}", device.Description, linkType);
            }

            throw new InvalidOperationException("No ethernet PCap supported devices found, are you running as a user with access to adapters (root on Linux)?");
        }
        private static (LibPcapLiveDevice, LinkLayers) ChoosePcapDevice()
        {
            //todo: maybe not this lol
            NetworkInterface[] networkInterfaces = NetworkInterface.GetAllNetworkInterfaces();
            Console.WriteLine();
            Console.WriteLine("The following devices are available on this machine:");
            Console.WriteLine("----------------------------------------------------");
            Console.WriteLine();
            int b = 0;
            var interfaces = PcapInterface.GetAllPcapInterfaces();
            foreach (PcapInterface allPcapInterface in interfaces)
            {
            
                Console.WriteLine("{0})\t{1} - {2}",b,allPcapInterface.Name, allPcapInterface.Description);
                b++;
            }
        

            int i = 0;
            Console.WriteLine();
            Console.Write("-- Please choose a device to capture: ");
            i = int.Parse(Console.ReadLine());
        

 

            var device = new LibPcapLiveDevice(interfaces[i]);
            device.Open();
        
        
        
            return (device, device.LinkType);
        }

        /// <summary>
        /// Checks if a PCap interface represents an outgoing network interface.
        /// </summary>
        /// <param name="pCapInterface">The PCap interface to check.</param>
        /// <returns><see langword="false"/> for 'any', virtual, or local network interfaces. <see langword="true"/> otherwise.</returns>
        /// <remarks>Taken from devove's project and adjusted for readability.</remarks>
        private static bool IsOutgoingPCapInterface(PcapInterface pCapInterface)
        {
            var friendlyName = pCapInterface.FriendlyName;
            if (string.IsNullOrEmpty(friendlyName))
                return false;

            if (friendlyName is "any" or "virbr0-nic")
                return false;

            friendlyName = friendlyName.ToLower();
            return !friendlyName.Contains("loopback") && !friendlyName.Contains("wsl");
        }
    }
}