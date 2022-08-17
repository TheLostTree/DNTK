import { ProtEntityType } from "../../src/messages/ProtEntityType";
import type {SceneEntityDisappearNotify} from "../../src/messages/SceneEntityDisappearNotify";
import type {PacketNotifyDT} from "../../src/websocket/WSPacket";
import {world} from "../main";

export default function handle(data: PacketNotifyDT<SceneEntityDisappearNotify>)
{
    for(let entityId of data.PacketData.EntityList){
        const entity = world.entityList[entityId];

        //we rely on sceneteam to update avatar entities
        if(entity?.EntityType == ProtEntityType.PROT_ENTITY_TYPE_AVATAR) continue;
        world.deregisterEntity(entityId, data.PacketData.DisappearType)
    }
    console.log(`Deregistered ${data.PacketData.EntityList.length} entities`)
}