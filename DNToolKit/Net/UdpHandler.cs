using DNToolKit.Listeners;
using DNToolKit.PacketProcessors;
using DNToolKit.Protocol;
using DNToolKit.Protocol.KCP;
using PacketDotNet;
using Serilog;
using SharpPcap;

namespace DNToolKit.Net;

public class UdpHandler : IPcapListener
{
    //todo: maybe sync the kcp update
    private Kcp? _client;
    private Kcp? _server;
    private DNToolKit _toolKit;

    
    public UdpHandler(DNToolKit toolKit)
    {
        _toolKit = toolKit;
    }

    public void OnPcap(RawCapture rawCapture, LinkLayers t)
    {
        UdpPacket udpPacket;
        if (t == LinkLayers.Ethernet)
        {
            udpPacket= PacketDotNet.Packet.ParsePacket(LinkLayers.Ethernet,
                    rawCapture.Data)
                .Extract<IPv4Packet>()
                .Extract<UdpPacket>();
        }
        else if (t == LinkLayers.RawLegacy)
        {
            udpPacket= PacketDotNet.Packet.ParsePacket(LinkLayers.RawLegacy,
                    rawCapture.Data)
                .Extract<IPv4Packet>()
                .Extract<UdpPacket>();
        }
        else
        {
            Log.Warning("unknown linklayer type for {D}",t.ToString() );
            return;
            // add more fallbacks (for example the router one for srl?
        }
        

        var sender = udpPacket.DestinationPort is 22101 or 22102 ? Sender.Client : Sender.Server;
        var packetBytes = udpPacket.PayloadData;

        if (packetBytes.Length == 20)
        {
            var magic = packetBytes.GetUInt32(0, true);
            var conv = packetBytes.GetUInt32(4, true);
            var token = packetBytes.GetUInt32(8, true);

            switch (magic)
            {
                //todo: send handshake representation to frontend
                case 0x145:

                    if (sender == Sender.Server)
                    {
                        Log.Debug("Server Handshake : {Conv}, {Token}", conv, token);
                        _toolKit.Processor.Reset();
                        _client = new Kcp(conv, token, Sender.Client, onKcpPacket);
                        _server = new Kcp(conv, token, Sender.Server, onKcpPacket);
                    }

                    break;
                case 0x194:
                    if (sender == Sender.Server) break;
                    if (_client is not null)
                    {
                        Log.Information($"{sender} disconnected");
                    }

                    break;
                case 0xFF:
                    break;
                default:
                    //unhandled handshake
                    Log.Error("Unhandled Handshake {MagicBytes}", magic);
                    break;
            }

            
            //ignore bytes
        }
        if (_client is not null && _server is not null)
        {
            _ = Sender.Client == sender ? _client.Input(packetBytes) : _server.Input(packetBytes);
        }
    }

    private void onKcpPacket(byte[] data, Sender sender)
    {
        _toolKit.Processor.AddPacket(data, sender);
    }


    public enum Sender
    {
        Server,
        Client
    }
}