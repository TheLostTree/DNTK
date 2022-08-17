import { items } from "../../src/lib/DamageInstance";
import type { EntityMoveInfo } from "src/messages/EntityMoveInfo";
import type { EvtBeingHitInfo } from "src/messages/EvtBeingHitInfo";
import type { CombatInvocationsNotify } from "../../src/messages/CombatInvocationsNotify";
import { CombatTypeArgument } from "../../src/messages/CombatTypeArgument";
import { PacketNotifyDT, Sender } from "../../src/websocket/WSPacket";


export default function handle(data: PacketNotifyDT<CombatInvocationsNotify>){
    //do actual damage parsing here
    //entityfp update notify is for energy, and syncing values, not damage parsing

    for(let i of data.PacketData.InvokeList){
        switch(i.ArgumentType){
            case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_ENTITY_MOVE:
                handleMove(i.CombatData as EntityMoveInfo);
                break;
            case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_EVT_BEING_HIT:
                //i only seemed to specially parse the clientside packet for this...
                if(data.Sender == Sender.Client) continue;
                handleHit(i.CombatData as EvtBeingHitInfo, data);
                break;
            default:
                //console.log(CombatTypeArgument[i.ArgumentType])
        }
    }
}

function handleHit(data: EvtBeingHitInfo, packet: PacketNotifyDT<CombatInvocationsNotify>){
    items.push({
        time: BigInt(packet.PacketHead.SentMs.toString())!,
        hitInfo: data
    })
}

function handleMove(data: EntityMoveInfo){
    //console.log(data)
}