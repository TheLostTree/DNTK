using DNToolKit.Net;
using DNToolKit.PacketProcessors;
using PacketDotNet;
using Serilog;
using SharpPcap;

namespace DNToolKit.Sniffer;

public class UdpHandler
{
    //todo: maybe sync the kcp update
    private Kcp? _client;
    private Kcp? _server;
    private readonly PacketProcessor _processor;

    
    public UdpHandler()
    {
        _processor = new PacketProcessor();
    }

    public void HandleRawCapture(RawCapture rawCapture, LinkLayers t)
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
                        _processor.Reset();
                        _client = new Kcp(conv, token, Sender.Client, _processor);
                        _server = new Kcp(conv, token, Sender.Server, _processor);
                    }

                    break;
                case 0x194:
                    if (sender == Sender.Server) break;
                    if (_client is not null)
                    {
                        Log.Information($"{sender} disconnected");
                        Log.Warning("Relaunch your client to continue capturing packets!");
                    }

                    break;
                case 0xFF:
                    break;
                default:
                    //unhandled handshake
                    Log.Error("Unhandled Handshake {MagicBytes}", magic);
                    break;

                    return;
            }

            
            //ignore bytes
        }
        if (_client is not null && _server is not null)
        {
            _ = Sender.Client == sender ? _client.Input(packetBytes) : _server.Input(packetBytes);
        }
    }


    public enum Sender
    {
        Server,
        Client
    }

    public void Close()
    {
        Log.Information("UdpHandler stopped...");
    }
}