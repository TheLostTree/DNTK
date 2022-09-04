
import { world } from "../main";
import { Entity } from "../world/entity/Entity"
import FriendlyNames from "../resources/FriendlyNames.json"
import type { AbilityInvocationsNotify } from "../messages/AbilityInvocationsNotify";
import { AbilityInvokeArgument } from "../messages/AbilityInvokeArgument";
import type { AbilityActionCreateGadget } from "../messages/AbilityActionCreateGadget";
import type { AbilityInvokeEntry } from "../messages/AbilityInvokeEntry";
import type { PacketNotifyDT } from "../websocket/WSPacket";
import type { AbilityMetaModifierChange } from "../messages/AbilityMetaModifierChange";


export default function handle(data: PacketNotifyDT<AbilityInvocationsNotify>) {
    //do actual damage parsing here
    //entityfp update notify is for energy, and syncing values, not damage parsing

    for (let i of data.PacketData.Invokes) {
        switch (i.ArgumentType) {
            case AbilityInvokeArgument.ABILITY_INVOKE_ARGUMENT_ACTION_CREATE_GADGET:
                handleCreateGadget(i.AbilityData as AbilityActionCreateGadget, i);
                break;
            case AbilityInvokeArgument.ABILITY_INVOKE_ARGUMENT_META_MODIFIER_CHANGE:
                handleMetaModifierChange(i.AbilityData as AbilityMetaModifierChange, i);
                break;
            default:
                // console.log(CombatTypeArgument[i.ArgumentType])
        }
    }
}

function handleCreateGadget(data: AbilityActionCreateGadget, invoke: AbilityInvokeEntry) {
    let responsible = world.entityList.get(invoke.EntityId);
    console.log(responsible.getFriendlyName() || invoke.EntityId + " created a gadget");
    
}

function handleMetaModifierChange(data: AbilityMetaModifierChange, invoke: AbilityInvokeEntry){
    let responsible = world.entityList.get(invoke.EntityId);
    console.log(responsible.getFriendlyName() || invoke.EntityId + " changed a meta modifier: " + JSON.stringify(data));
}
    

