using System.Security.Cryptography;
using Common;
using Common.Protobuf;
using DNToolKit.Packet;

namespace DNToolKit.PacketProcessors;

public class AbilityInvokeProcessor
{
    public static UnionCmdPacket.OnionCmd.Cmd? ProcessAbilityInvoke(byte[] bytes)
    {

        var abilityInvocationsNotify = AbilityInvocationsNotify.Parser.ParseFrom(bytes);
        
        //todo: rename
        var onionCmd = new UnionCmdPacket.OnionCmd.Cmd();
        onionCmd.MessageId = (uint)Opcode.AbilityInvocationsNotify;
        onionCmd.Body = abilityInvocationsNotify;
        return onionCmd;
    }
}