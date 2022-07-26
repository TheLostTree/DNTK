using Common;
using Common.Protobuf;

namespace DNToolKit.PacketProcessors;

public class UnionCmdProcessor
{
    public UnionCmdProcessor()
    {
        
    }

    public static List<Packet.Packet> ProcessUnion(Packet.Packet packet)
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
                var AIN = unionpkt.PacketData as AbilityInvocationsNotify;
                //unfortunately i will have to offload the decrypting somwhere else
                    
                pktArray.Add(unionpkt);
                // var abilitypkt = new Packet.Packet()
                // {
                //     _protobufBytes = unionCmd.Body.ToByteArray(),
                //     PacketType = (Opcode)unionCmd.MessageId,
                //     _metadataBytes = packet._metadataBytes
                // };
            }

            if (unionpkt.PacketType == Opcode.CombatInvocationsNotify)
            {
                
            }
        }

        return pktArray;
    }
}