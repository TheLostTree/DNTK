﻿
using DNToolKit.Crypto;
using PacketDotNet;
using Serilog;
using SharpPcap;
using SharpPcap.LibPcap;

namespace DNToolKit
{
    public class DNToolKit
    {
        public static TrafficInstance instance;

        private const string PCapFilter_ = "udp portrange 22101-22102";

        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration().MinimumLevel.Verbose().WriteTo.Console().CreateLogger();
            Log.Information("DNToolKit for v{Major}.{Minor}", 4, 0);
            instance = new TrafficInstance((pack) =>
            {
                Console.WriteLine(((Common.Opcode)pack.CmdId).ToString());
            });
            Console.WriteLine(Common.ProtobufParser.ParserCount);
            KeyBruteForcer.LoadOldSeeds();
            using var device = new CaptureFileReaderDevice("/Users/admin/Documents/Projects/DNToolKit/sensitive/login4.0gi.pcap");

            device.Open();
            device.Filter = PCapFilter_;

            device.OnPacketArrival += Device_OnPacketArrival;
            device.Capture();
            
        }

        private static void Device_OnPacketArrival(object sender, PacketCapture e)
        {
            var p = e.GetPacket()!;

            var LinkLayers = p.LinkLayerType;
            
            switch (LinkLayers)
            {
                case LinkLayers.Ethernet:
                case LinkLayers.RawLegacy:
                    var udpPacket = PacketDotNet.Packet.ParsePacket(LinkLayers, p.Data).Extract<IPv4Packet>()
                        .Extract<UdpPacket>(); 
                    instance.ProcessUdpPacket(udpPacket);
                    return;

                default:
                    Log.Warning("unknown link layer {LinkLayers}", LinkLayers);
                    return;
            }
        }

        public static IEnumerable<PcapInterface> GetAllNetworkInterfaces()
        {
            return PcapInterface.GetAllPcapInterfaces();
        }

    }
}
