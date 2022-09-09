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

    public class ObilityInvokeNotify
    {
        public ObilityInvokeAntree[] Invokes;
    }
    
    public static UnionCmdPacket.OnionCmd.Cmd? ProcessAbilityInvoke(byte[] bytes)
    {

        var abilityInvocationsNotify = AbilityInvocationsNotify.Parser.ParseFrom(bytes);

        var invokes = ProcessEntries(abilityInvocationsNotify!.Invokes);

        
        //todo: rename
        var onionCmd = new UnionCmdPacket.OnionCmd.Cmd();
        onionCmd.MessageId = (uint)Opcode.AbilityInvocationsNotify;
        onionCmd.Body = new ObilityInvokeNotify()
        {
            Invokes = invokes.ToArray()
        };
        return onionCmd;
    }

    public static List<ObilityInvokeAntree> ProcessEntries(IEnumerable<AbilityInvokeEntry> invokeList)
    {
        List<ObilityInvokeAntree> invokes = new List<ObilityInvokeAntree>();

        foreach (var abilityInvokeEntry in invokeList)
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
                case AbilityInvokeArgument.MetaModifierChange:
                    th.AbilityData = AbilityMetaModifierChange.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaReinitOverridemap:
                    th.AbilityData = AbilityMetaReInitOverrideMap.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaOverrideParam:
                    th.AbilityData = AbilityScalarValueEntry.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinCostStamina:
                    th.AbilityData = AbilityMetaReInitOverrideMap.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionGenerateElemBall:
                    th.AbilityData = AbilityActionGenerateElemBall.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionCreateGadget:
                    th.AbilityData = AbilityActionCreateGadget.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaModifierDurabilityChange:
                    th.AbilityData =
                        AbilityMetaModifierDurabilityChange.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinDoActionByElementReaction:
                    th.AbilityData =
                        AbilityMixinDoActionByElementReaction.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaTriggerElementReaction:
                    th.AbilityData = AbilityMetaTriggerElementReaction.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaAddNewAbility:
                    th.AbilityData = AbilityMetaAddAbility.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.None:
                    th.AbilityData = abilityInvokeEntry.AbilityData.ToBase64();
                    break;
                default:
                    //default
                    th.AbilityData = abilityInvokeEntry.AbilityData.ToBase64();
                    break;
            }
            invokes.Add(th);
        }

        return invokes;
    }
}