using Common;
using Common.Protobuf;

namespace DNToolKit.PacketProcessors;

public class UnionCmdProcessor
{
    public static void ProcessUnion(Packet.Packet packet)
    {
        var pktArray = new List<Packet.Packet>();
        foreach (var unionCmd in (packet.PacketData as UnionCmdNotify)!.CmdList)
        {
            var unionpkt = new Packet.Packet()
            {
                ProtobufBytes = unionCmd.Body.ToByteArray(),
                PacketType = (Opcode)unionCmd.MessageId,
                MetadataBytes = packet.MetadataBytes
            };
            unionpkt.ParsePacket();
            if (unionpkt.PacketType == Opcode.AbilityInvocationsNotify)
            {

                AbilityInvokeProcessor.ProcessAbilityInvoke(unionpkt);

            }

            if (unionpkt.PacketType == Opcode.CombatInvocationsNotify)
            {
                
            }
        }
    }
}