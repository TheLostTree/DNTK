using DNToolKit.AnimeGame;
using Google.Protobuf;

namespace IridiumBackend.Extensions
{
    static class AnimeGamePacketExtensions
    {
        public static string ToWebSocketMessage(this AnimeGamePacket packet)
        {
            // if there is no type parser, todo: probably avoid this
            var s = packet.ProtoBuf is null ? "\"backend is missing .proto\"" : JsonFormatter.Default.Format(packet.ProtoBuf);
            return $$"""
                   {
                       "packetID": {{(int)packet.PacketType}},
                       "protoName": "{{packet.PacketType}}",
                       "object": {{s}},
                       "packet": "{{Convert.ToBase64String(packet.ProtoBufBytes)}}",
                       "source": {{(int)packet.Sender}}
                   }
                   """;
        }
    }
}
