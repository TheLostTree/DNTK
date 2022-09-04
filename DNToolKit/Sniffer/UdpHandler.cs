using DNToolKit.Net;
using DNToolKit.PacketProcessors;
using PacketDotNet;
using Serilog;
using SharpPcap;

namespace DNToolKit.Sniffer;

public class UdpHandler
{
    //todo: maybe sync the kcp update
    private KCP? _client;
    private KCP? _server;
    private PacketProcessor _processor;

    
    public UdpHandler()
    {
        _processor = new PacketProcessor();
    }

    public void HandleRawCapture(RawCapture rawCapture)
    {
        var udpPacket = PacketDotNet.Packet.ParsePacket(LinkLayers.Ethernet,
                rawCapture.Data)
            .Extract<IPv4Packet>()
            .Extract<UdpPacket>();
        
        var sender = udpPacket.DestinationPort is 22101 or 22102 ? Sender.Client : Sender.Server;
        var packetBytes = udpPacket.PayloadData;
        
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
                            _processor.Reset();
                            _client?.Stop();
                            _server?.Stop();
                            _client = new KCP(conv, token,Sender.Client,_processor);
                            _server = new KCP(conv, token,Sender.Server,_processor);
                        }
                        break;
                    case 0x194:
                        if (sender == Sender.Server) break;
                        if (_client is not null)
                        {
                            //i will not stop the processor bc im really really sad rn
                            
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
        _processor.Stop();
        Log.Information("UdpHandler stopped...");
    }
}