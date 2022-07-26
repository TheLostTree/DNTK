using System.Text;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using Common;
using Common.Protobuf;
using DNToolKit.Sniffer;
using Google.Protobuf;
using Newtonsoft.Json;
using Newtonsoft.Json.Bson;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace DNToolKit.Packet;

public class Packet
{

    public static bool IridiumCompatability = true;
    
    
    [System.Text.Json.Serialization.JsonIgnore]
    public byte[] ProtobufBytes;
    
    [JsonInclude]
    public PacketHead Metadata;
    [System.Text.Json.Serialization.JsonIgnore]
    public byte[] MetadataBytes;
    
    [JsonInclude]
    public Opcode PacketType;

    [JsonInclude]
    public IMessage PacketData;

    [JsonInclude]
    public UdpHandler.Sender Sender;
    
    public Packet(byte[] data)
    {
        if (data.GetUInt16(0, true) != 0x4567) throw new ArgumentException("Invalid Packet Magic!");

        PacketType = (Opcode)data.GetUInt16(2, true);
        var metadatalen = data.GetUInt16(4, true);
        MetadataBytes = data[10..(10 + metadatalen)];
        var datalen = data.GetUInt32(6, true);
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

    public Packet()
    {
        
    }

    public object GetObj()
    {

        if (IridiumCompatability)
        {
            
            Dictionary<string, object> jsonobj = new();
            jsonobj.Add("packetID", (int)PacketType);
            jsonobj.Add("protoName", PacketType.ToString());
            jsonobj.Add("object", PacketData);
            jsonobj.Add("packet", Convert.ToBase64String(ProtobufBytes));
            jsonobj.Add("source", (int)Sender);

            
            return jsonobj;
        }
        else
        {
            Dictionary<string, object> jsonobj = new();
            jsonobj.Add("PacketHead", Metadata);
            jsonobj.Add("PacketData", PacketData);
            jsonobj.Add("CmdID", PacketType.ToString());
            jsonobj.Add("Sender", (int)Sender);
        
            return jsonobj;
        }
    }
}



