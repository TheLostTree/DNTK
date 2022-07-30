using DNToolKit.Net;
using DNToolKit.PacketProcessors;
using PacketDotNet;
using Serilog;
using SharpPcap;

namespace DNToolKit.Sniffer;

public class UdpHandler
{
    private KCP? _client;
    private KCP? _server;
    private PacketProcessor? _processor;
    
    public UdpHandler()
    {
        _processor = new PacketProcessor();
    }

    public void HandleRawCapture(RawCapture rawCapture)
    {
        IPv4Packet ipv4Packet = PacketDotNet.Packet.ParsePacket(LinkLayers.Ethernet, rawCapture.Data).Extract<IPv4Packet>();
        UdpPacket udpPacket = ipv4Packet.Extract<UdpPacket>();
        Sender sender = udpPacket.DestinationPort is 22101 or 22102 ? Sender.Client : Sender.Server;
        byte[] packetBytes = udpPacket.PayloadData;


        // Log.Information($"Received {packetBytes.Length} bytes");
        if(packetBytes.Length == 20)
        {
            try
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
                            _processor ??= new PacketProcessor();
                            
                            _client = new KCP(conv, token,Sender.Client,_processor);
                            _server = new KCP(conv, token,Sender.Server,_processor);
                        }
                        //TODO: handle this
                        break;
                    case 0x194:
                        Log.Information($"{sender} disconnected");
                        _client?.Stop();
                        _server?.Stop();
                        if (_client is not null)
                        {
                            _processor?.Stop();
                            _processor = null;
                        }
                        break;
                    case 0xFF:                                  
                        break;
                    default:
                        //unhandled handshake
                        Log.Error("Unhandled Handshake {MagicBytes}", magic);
                        break;
                }
            }
            catch (Exception e)
            {
                Log.Error("Handshake Error: {Error}", e.ToString());
            }
            return;
        }
        
        if (_client is not null && _server is not null)
        {
            _ = Sender.Client == sender ? _client.Input(packetBytes) : _server.Input(packetBytes);
        } 
        
        //Log.Information($"Ignoring {packetBytes.Length} bytes going to {destination}");

    }
    public enum Sender
    {
        Server,
        Client
    }

    public void Close()
    {
        _client?.Stop();
        _server?.Stop();
        _processor?.Stop();
        Log.Information("UdpHandler stopped...");
    }
}