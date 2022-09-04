
import type { EntityMoveInfo } from "src/messages/EntityMoveInfo";
import type { EvtBeingHitInfo } from "src/messages/EvtBeingHitInfo";
import type { CombatInvocationsNotify } from "../../src/messages/CombatInvocationsNotify";
import { CombatTypeArgument } from "../../src/messages/CombatTypeArgument";
import { PacketNotifyDT, Sender } from "../../src/websocket/WSPacket";
import { world } from "../../src/main";
import { Entity, MPLevel } from "../world/entity/Entity"
import FriendlyNames from "../resources/FriendlyNames.json"
import { ProtEntityType } from "../messages/ProtEntityType";
import { AddDamageToTable } from "../lib/DamageTableTs";


export default function handle(data: PacketNotifyDT<CombatInvocationsNotify>) {
    //do actual damage parsing here
    //entityfp update notify is for energy, and syncing values, not damage parsing

    for (let i of data.PacketData.InvokeList) {

        //100ms timeout to allow for the entity to be registered just in case
        //
        setTimeout(()=>{
            switch (i.ArgumentType) {
                case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_ENTITY_MOVE:
                    handleMove(i.CombatData as EntityMoveInfo);
                    break;
                case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_EVT_BEING_HIT:
                    //i only seemed to specially parse the clientside packet for this...
                    handleHit(i.CombatData as EvtBeingHitInfo, data);
                    break;
                case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_FACE_TO_DIR:
                case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_SYNC_TRANSFORM:
                case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_ANIMATOR_PARAMETER_CHANGED:
                    break;
                case CombatTypeArgument.COMBAT_TYPE_ARGUMENT_Unk2700_KPDNFKCMKPG:
                    handleHeal(i.CombatData as unknown as HealInvoke)
                    break;
                //healing packet
                case undefined:
                    // console.log(i.CombatData)
                    break;
                default:
                // console.log(CombatTypeArgument[i.ArgumentType])
            }
        }, 100)
    }
}

function handleHit(data: EvtBeingHitInfo, packet: PacketNotifyDT<CombatInvocationsNotify>) {
    if(packet.Sender === Sender.Client) return;
    let attackerEntity = world.getRootOwner(data.AttackResult.AttackerId) || world.entityList.get(data.AttackResult.AttackerId);

    if (data.AttackResult.AttackerId == 327155713) {
        world.entityList.forEach(entity => {
            if (entity.EntityType == ProtEntityType.PROT_ENTITY_TYPE_MP_LEVEL) {
                attackerEntity = entity;
            }
        })
    }

    const defenderEntity = world.entityList.get(data.AttackResult.DefenseId);

    if(data.AttackResult.AbilityIdentifier.AbilityCasterId){
        attackerEntity = world.getRootOwner(data.AttackResult.AbilityIdentifier.AbilityCasterId) || world.getRootOwner(data.AttackResult.AttackerId) || world.entityList.get(data.AttackResult.AttackerId);
    }
    // const owner = world.getOwner(attackerEntity);

    let ActualData: ({
        Element: number,
        Damage: number,
        IsCrit: boolean,
        Attacker: string | number,
        Defender: string | number,
    }) = {
        //todo:maybe figure out an enum thing for this
        Element: data.AttackResult.ElementType,
        Damage: data.AttackResult.Damage,
        IsCrit: data.AttackResult.IsCrit,
        Attacker: data.AttackResult.AttackerId,
        Defender: data.AttackResult.DefenseId,
    }

    ActualData.Attacker = attackerEntity ? attackerEntity.getFriendlyName() : ActualData.Attacker;
    ActualData.Defender = defenderEntity ? defenderEntity.getFriendlyName() : ActualData.Defender;


    if (ActualData.Damage) console.log(`${ActualData.Attacker} dealt ${ActualData.Damage} damage to ${ActualData.Defender}, element: ${Element[ActualData.Element]}, crit: ${ActualData.IsCrit}`)
    //todo: maybe write this to a file idk
    AddDamageToTable({
        Attacker: ActualData.Attacker.toString(),
        Damage: ActualData.Damage,
        Healing: 0,
        Crit: data.AttackResult.IsCrit
    });


}

function handleMove(data: EntityMoveInfo) {
    const entity = world.entityList.get(data.EntityId);
    if (!entity) return;
    entity.MotionInfo = data.MotionInfo;
    //todo: maybe handle emit a EntityMove event
}

function handleHeal(data: HealInvoke) {
    // console.log(data)
    const healer = world.getOwner(data.SourceId) || world.entityList.get(data.SourceId);
    const healee = world.entityList.get(data.TargetId);



    const healerName = healer ? healer.getFriendlyName() : data.SourceId;
    const healeeName = healee ? healee.getFriendlyName() : data.TargetId;

    AddDamageToTable({
        Attacker: healerName.toString(),
        Damage: 0,
        Healing: data.HealedAmount,
        Crit: false,
    });

    console.log(`${healerName} healed ${healeeName} for ${data.ActualAmount} health`)
}


interface HealInvoke {
    TargetId?: number;
    SourceId?: number;

    //includes overheal
    HealedAmount?: number;

    //doesn't include overheal
    ActualAmount?: number;
}

enum Element {
    Physical = 0,
    Pyro = 1,
    Hydro = 2,
    Dendro = 3,
    Electro = 4,
    Cryo = 5,
    //:skull:
    Freeze = 6,
    Anemo = 7,
    Geo = 8,
}