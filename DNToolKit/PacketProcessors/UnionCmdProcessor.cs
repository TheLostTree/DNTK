using Common;
using Common.Protobuf;
using DNToolKit.Packet;

namespace DNToolKit.PacketProcessors;

public class UnionCmdProcessor
{
    public static void ProcessUnion(Packet.Packet packet)
    {

        List<UnionCmdPacket.OnionCmd.Cmd> cmds = new List<UnionCmdPacket.OnionCmd.Cmd>();
        foreach (var unionCmd in (packet.PacketData as UnionCmdNotify)!.CmdList)
        {
            var unionpkt = (Opcode)unionCmd.MessageId;

            
            //todo: package all invokes back after parsing them
            
            if (unionpkt == Opcode.AbilityInvocationsNotify)
            {

                var a = AbilityInvokeProcessor.ProcessAbilityInvoke(unionCmd.Body.ToByteArray());
                if(a is not null) cmds.Add(a);
            }

            if (unionpkt == Opcode.CombatInvocationsNotify)
            {
                var b = CombatInvokeProcessor.ProcessCombatInvoke(unionCmd.Body.ToByteArray());
                if(b is not null) cmds.Add(b);
            }
        }
        
        var un = new UnionCmdPacket()
        {
            Metadata = packet.Metadata,
            PacketType = Opcode.UnionCmdNotify,
            Sender = packet.Sender,
            DummyPacketData = new UnionCmdPacket.OnionCmd()
            {
                CmdList = cmds.ToArray()
            }
        };
        Program.FrontendManager.AddGamePacket(un);
        
    }
}