using System.Text;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using Common;
using Common.Protobuf;
using DNToolKit.Frontend;
using DNToolKit.Sniffer;
using Google.Protobuf;
using Newtonsoft.Json;
using Newtonsoft.Json.Bson;
using Serilog;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace DNToolKit.Packet;

public class Packet
{
    public byte[] ProtobufBytes;
    
    public PacketHead Metadata;

    public byte[] MetadataBytes;
    
    public Opcode PacketType;

    public IMessage PacketData;


    public UdpHandler.Sender Sender;

    //don't use this mostly...
    public byte[] FullData;
    
    public Packet(byte[] data)
    {
        if (data.GetUInt16(0, true) != 0x4567) throw new ArgumentException("Invalid Packet Magic!");
        if (data.GetUInt16(data.Length-2, true) != 0x89AB) throw new ArgumentException("Invalid Packet Magic!");

        FullData = data;
        
        PacketType = (Opcode)data.GetUInt16(2, true);
        var metadatalen = data.GetUInt16(4, true);
        var datalen = data.GetUInt32(6, true);

        if (metadatalen + datalen + 12 != data.Length)
        {
            throw new ArgumentException("Packet bytelength does not match reported value!");
        }
        MetadataBytes = data[10..(10 + metadatalen)];
        ProtobufBytes = data[(10 + metadatalen)..(int)(10 + metadatalen + datalen)];
        ParsePacket();
    }

    public void ParsePacket()
    {
        Metadata = PacketHead.Parser.ParseFrom(MetadataBytes);
        var type = ProtobufFactory.GetPacketTypeParser(PacketType);
        if (type is not null)
        {
            PacketData = type.ParseFrom(ProtobufBytes);
        }
    }


    public override string ToString()
    {
        var res = String.Format("""
{{
    "packetId": {0},
    "protoName": "{1}",
    "object", {2},
    "packet", "{3}",
    "source", {4}
}}
""", (int)PacketType,PacketType.ToString(), JsonFormatter.Default.Format(PacketData), Convert.ToBase64String(ProtobufBytes),(int)Sender);

        return res;
    }
}



