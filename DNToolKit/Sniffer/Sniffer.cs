using System.Collections.Concurrent;
using System.Net.NetworkInformation;
using PacketDotNet;
using Serilog;
using SharpPcap;
using SharpPcap.LibPcap;

namespace DNToolKit.Sniffer;

public class Sniffer
{

    private LibPcapLiveDevice _pcapDevice;
    
    public bool Running;
    private Thread _workingThread;
    private ConcurrentQueue<RawCapture> _packetQueue;
    private UdpHandler _udpHandler;
    
    public Sniffer()
    {
        _packetQueue = new();
    }

    public void OnPacketArrival(object sender, PacketCapture e)
    {
        _packetQueue.Enqueue(e.GetPacket());
    }

    public void Start()
    {
        Log.Information("SharpPcap {0}, StartLiveCapture", (object)Pcap.SharpPcapVersion);
        Running = true;
        SharpPcapCapturer();
        _workingThread = new Thread(ProcessPacketQueue);
        _workingThread.Name = "ProcessPacketQueue";
        _udpHandler = new UdpHandler();
        _workingThread.Start();
    }

    public void SharpPcapCapturer()
    {
        _pcapDevice = GetPcapDevice();

        _pcapDevice.OnPacketArrival += OnPacketArrival;
        Console.WriteLine();
        int readTimeout = 1000;
        _pcapDevice.Open(DeviceModes.Promiscuous | DeviceModes.DataTransferUdp | DeviceModes.NoCaptureLocal, readTimeout);
        _pcapDevice.Filter = "udp portrange 22101-22102";
        _pcapDevice.StartCapture();


        Log.Information("-- Listening on {0} {1}", (object)_pcapDevice.Name, (object)_pcapDevice.Description);



    }


    public void ProcessPacketQueue()
    {
        while (Running)
        {
            try
            {
                if (_packetQueue.TryDequeue(out var rawPacket))
                {
                    _udpHandler.HandleRawCapture(rawPacket);
                }
                else
                {
                    Thread.Sleep(1);
                }
            }
            catch (Exception e)
            {
                Log.Error(e.ToString());
                Thread.Sleep(10);
            }
        }
    }
    public void Close()
    {
        _pcapDevice.StopCapture();
        Log.Information("-- Capture stopped.");
        Log.Information(_pcapDevice.Statistics.ToString());
        Running = false;
        _udpHandler.Close();
        _workingThread.Join();
        Log.Information("Sniffer stopped...");

    }


    // taken from devove's proj
    private static LibPcapLiveDevice GetPcapDevice()
    {
        NetworkInterface[] networkInterfaces = NetworkInterface.GetAllNetworkInterfaces();
        foreach (PcapInterface allPcapInterface in PcapInterface.GetAllPcapInterfaces())
        {
            var friendlyName = allPcapInterface.FriendlyName ?? string.Empty;
            if (friendlyName.ToLower().Contains("loopback") || friendlyName is "any" or "virbr0-nic" ||friendlyName.ToLower().Contains("wsl") ) continue;
            
            var networkInterface = networkInterfaces.FirstOrDefault(ni => ni.Name == friendlyName);
            if ((networkInterface != null ? (networkInterface.OperationalStatus != OperationalStatus.Up ? 1 : 0) : 1) !=
                0) continue;
            
            using (var device = new LibPcapLiveDevice(allPcapInterface))
            {
                LinkLayers linkType;
                try
                {
                    device.Open();
                    linkType = device.LinkType;
                }
                catch (PcapException ex)
                {
                    Console.WriteLine(ex);
                    continue;
                }
                if (linkType == LinkLayers.Ethernet)
                    return device;
            }
        }
        throw new InvalidOperationException("No ethernet pcap supported devices found, are you running as a user with access to adapters (root on Linux)?");
    }
}