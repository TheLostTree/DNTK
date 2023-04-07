using DNToolKit.AnimeGame;
using Google.Protobuf;

namespace IridiumBackend.Extensions
{
    static class AnimeGamePacketExtensions
    {
        public static string ToWebSocketMessage(this AnimeGamePacket packet)
        {
            return $$"""
                   {
                       "packetID": {{(int)packet.PacketType}},
                       "protoName": "{{packet.PacketType}}",
                       "object": {{JsonFormatter.Default.Format(packet.ProtoBuf)}},
                       "packet": "{{Convert.ToBase64String(packet.ProtoBufBytes)}}",
                       "source": {{packet.Sender}}
                   }
                   """;
        }
    }
}
