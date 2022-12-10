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

        (string, int)[] pain = new (string, int)[4];

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
                case AbilityInvokeArgument.ActionTriggerAbility:
                    th.AbilityData = AbilityActionTriggerAbility.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionSetRandomOverrideMapValue:
                    th.AbilityData =
                        AbilityActionSetRandomOverrideMapValue.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaCommandModifierChangeRequest:
                    th.AbilityData = AbilityMetaModifierChange.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaSpecialFloatArgument:
                    th.AbilityData = AbilityMetaSpecialFloatArgument.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaAddOrGetAbilityAndTrigger:
                    th.AbilityData =
                        AbilityMetaAddOrGetAbilityAndTrigger.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaSetKilledState:
                    th.AbilityData = AbilityMetaSetKilledState.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaSetAbilityTrigger:
                    th.AbilityData = AbilityMetaSetAbilityTrigger.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaSetModifierApplyEntity:
                    th.AbilityData =
                        AbilityMetaSetModifierApplyEntityId.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaElementReactionVisual:
                    th.AbilityData = AbilityMetaElementReactionVisual.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaSetPoseParameter:
                    th.AbilityData = AbilityMetaSetPoseParameter.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaUpdateBaseReactionDamage:
                    th.AbilityData =
                        AbilityMetaUpdateBaseReactionDamage.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaLoseHp:
                    th.AbilityData = AbilityMetaLoseHp.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionSetCrashDamage:
                    th.AbilityData = AbilityActionSetCrashDamage.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionEffect:
                    //
                    break;
                case AbilityInvokeArgument.ActionSummon:
                    th.AbilityData = AbilityActionSummon.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionBlink:
                    th.AbilityData = AbilityActionBlink.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionApplyLevelModifier:
                    th.AbilityData = AbilityApplyLevelModifier.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionServerMonsterLog:
                    th.AbilityData = AbilityActionServerMonsterLog.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionCreateTile:
                    th.AbilityData = AbilityActionCreateTile.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionDestroyTile:
                    th.AbilityData = AbilityActionDestroyTile.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.ActionFireAfterImage:
                    th.AbilityData = AbilityActionFireAfterImage.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinAvatarSteerByCamera:
                    th.AbilityData = AbilityMixinAvatarSteerByCamera.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinWindZone:
                    th.AbilityData = AbilityMixinWindZone.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinEliteShield:
                    th.AbilityData = AbilityMixinEliteShield.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinElementShield:
                    th.AbilityData = AbilityMixinElementShield.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinGlobalShield:
                    th.AbilityData = AbilityMixinGlobalShield.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinShieldBar:
                    th.AbilityData = AbilityMixinShieldBar.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinWindSeedSpawner:
                    th.AbilityData = AbilityMixinWindSeedSpawner.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinFieldEntityCountChange:
                    th.AbilityData = AbilityMixinFieldEntityCountChange.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinScenePropSync:
                    th.AbilityData = AbilityMixinScenePropSync.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MixinWidgetMpSupport:
                    th.AbilityData = AbilityMixinWidgetMpSupport.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                case AbilityInvokeArgument.MetaGlobalFloatValue:
                    th.AbilityData = AbilityScalarValueEntry.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
                    break;
                    
                    //nothing obvious
                case AbilityInvokeArgument.MixinMonsterDefend:
                case AbilityInvokeArgument.MetaClearOverrideParam:
                case AbilityInvokeArgument.MetaClearGlobalFloatValue:
                case AbilityInvokeArgument.MetaAbilityElementStrength:
                    

                    //this one specificallt doesnt have a body; all required data is in abilityhead
                //th.AbilityData = AbilityMetaSpecialFloatArgument.Parser.ParseFrom(abilityInvokeEntry.AbilityData);
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