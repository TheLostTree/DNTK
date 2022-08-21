using Common;
using Common.Protobuf;
using DNToolKit.Packet;
using Serilog;

namespace DNToolKit.PacketProcessors;

public class CombatInvokeProcessor
{
    public class CumbatInvuke
    {
        public CombatTypeArgument ArgumentType;
        public ForwardType ForwardType;
        public object CombatData;
    }

    public class CumbatInvukeNotif
    {
        public CumbatInvuke[] InvokeList;
    }

    public static UnionCmdPacket.OnionCmd.Cmd? ProcessCombatInvoke(byte[] combatinvokebytes)
    {
        var data = CombatInvocationsNotify.Parser.ParseFrom(combatinvokebytes);
        var list = new List<CumbatInvuke>();
        
        
        if (data?.InvokeList is null) return null;
        foreach (CombatInvokeEntry invoke in data.InvokeList)
        {
            var cumbat = new CumbatInvuke()
            {
                ArgumentType = invoke.ArgumentType,
                ForwardType = invoke.ForwardType,
                CombatData = null
            };
            switch (invoke.ArgumentType)
            {
                //todo: handle
                case CombatTypeArgument.EntityMove:
                    cumbat.CombatData = EntityMoveInfo.Parser.ParseFrom(invoke.CombatData);
                    break;
                case CombatTypeArgument.EvtBeingHit:
                    cumbat.CombatData = EvtBeingHitInfo.Parser.ParseFrom(invoke.CombatData);
                    // Log.Information("@{data}", cumbat.CombatData);
                    break;
                case CombatTypeArgument.Unk2700Kpdnfkcmkpg:
                    //healing packets
                    cumbat.CombatData = new HealInvoke(Unk2700_BEINCMBJDAA_ClientReq.Parser.ParseFrom(invoke.CombatData));
                    break;
                default:
                    cumbat.CombatData = invoke.CombatData.ToBase64();
                    break;
            }
            
            list.Add(cumbat);
        }
        var onionCmd = new UnionCmdPacket.OnionCmd.Cmd();
        onionCmd.MessageId = (uint)Opcode.CombatInvocationsNotify;
        onionCmd.Body = new CumbatInvukeNotif()
        {
            InvokeList = list.ToArray()
        };
        return onionCmd;
        
    }

    private struct HealInvoke
    {
        public uint TargetId;
        public uint SourceId;
        public float HealedAmount;
        public float ActualAmount;
        public HealInvoke(Unk2700_BEINCMBJDAA_ClientReq indata)
        {
            this.ActualAmount = indata.Unk2700AEIDAJFHBBB;
            this.HealedAmount = indata.Unk2700JLLFGAIOPGC;
            this.TargetId = indata.TargetId;
            this.SourceId = indata.SourceId;
        }
    }
}