import { items } from "../../src/lib/DamageInstance";
import type { EntityMoveInfo } from "src/messages/EntityMoveInfo";
import type { EvtBeingHitInfo } from "src/messages/EvtBeingHitInfo";
import type { CombatInvocationsNotify } from "../../src/messages/CombatInvocationsNotify";
import { CombatTypeArgument } from "../../src/messages/CombatTypeArgument";
import { PacketNotifyDT, Sender } from "../../src/websocket/WSPacket";
import { world } from "../../src/main";
import {Entity} from "../world/entity/Entity"
import FriendlyNames from "../resources/FriendlyNames.json"


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
    
    const attackerEntity = world.getOwner(world.entityList.get(data.AttackResult.AttackerId)) || world.entityList.get(data.AttackResult.AttackerId);
    const defenderEntity = world.entityList.get(data.AttackResult.DefenseId);

    // const owner = world.getOwner(attackerEntity);

    let ActualData = {
        //todo:maybe figure out an enum thing for this
        Element: data.AttackResult.ElementType, 
        Damage: data.AttackResult.Damage,
        IsCrit: data.AttackResult.IsCrit,
        Attacker: data.AttackResult.AttackerId,
        Defender: data.AttackResult.DefenseId,
    }

    ActualData.Attacker = attackerEntity ? world.getFriendlyName(attackerEntity) || ActualData.Attacker : ActualData.Attacker;
    ActualData.Defender = defenderEntity ? world.getFriendlyName(defenderEntity) || ActualData.Defender : ActualData.Defender;
    console.log(`${ActualData.Attacker} dealt ${ActualData.Damage} damage to ${ActualData.Defender}`)


}

function handleMove(data: EntityMoveInfo){
    const entity = world.entityList.get(data.EntityId);
    if(!entity) return;
    entity.MotionInfo = data.MotionInfo;
    //todo: maybe handle emit a EntityMove event
}