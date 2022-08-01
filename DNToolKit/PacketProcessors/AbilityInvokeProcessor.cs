using System.Security.Cryptography;
using Common;
using Common.Protobuf;
using DNToolKit.Packet;

namespace DNToolKit.PacketProcessors;

public class AbilityInvokeProcessor
{
    public class ObilityInvokeAntree
    {
        public AbilityInvokeArgument ArgumentType;
        public AbilityInvokeEntryHead Head;
        public uint ForwardPeer;
        public uint EventId;
        public ForwardType ForwardType;
        public object AbilityData;
        public double TotalTickTime;
        public uint EntityId;
    }
    public static UnionCmdPacket.OnionCmd.Cmd? ProcessAbilityInvoke(byte[] bytes)
    {

        List<ObilityInvokeAntree> invokes = new List<ObilityInvokeAntree>();
        var abilityInvocationsNotify = AbilityInvocationsNotify.Parser.ParseFrom(bytes);
        foreach (var abilityInvokeEntry in abilityInvocationsNotify!.Invokes)
        {
            var th = new ObilityInvokeAntree()
            {
                ArgumentType = abilityInvokeEntry.ArgumentType,
                Head = abilityInvokeEntry.Head,
                ForwardPeer = abilityInvokeEntry.ForwardPeer,
                EventId = abilityInvokeEntry.EventId,
                ForwardType = abilityInvokeEntry.ForwardType,
                TotalTickTime = abilityInvokeEntry.TotalTickTime,
                EntityId = abilityInvokeEntry.EntityId,
                AbilityData = null
            };
            switch (abilityInvokeEntry.ArgumentType)
            {
                //todo: HANDLE ALL OF THESE AT LEAST(since gc handles them)
                // case AbilityInvokeArgument.MetaModifierChange:
                //     break;
                // case AbilityInvokeArgument.MetaReinitOverridemap:
                //     break;
                // case AbilityInvokeArgument.MetaOverrideParam:
                //     break;
                // case AbilityInvokeArgument.MixinCostStamina:
                //     break;
                // case AbilityInvokeArgument.ActionGenerateElemBall:
                //     break;
                // case AbilityInvokeArgument.ActionCreateGadget:
                //     break;
                default:
                    //default
                    th.AbilityData = abilityInvokeEntry.AbilityData.ToBase64();
                    break;
            }
            invokes.Add(th);
        }

        
        //todo: rename
        var onionCmd = new UnionCmdPacket.OnionCmd.Cmd();
        onionCmd.MessageId = (uint)Opcode.AbilityInvocationsNotify;
        onionCmd.Body = invokes.ToArray();
        return onionCmd;
    }
}