import { ProtEntityType } from "../../src/messages/ProtEntityType";
import type {SceneEntityDisappearNotify} from "../../src/messages/SceneEntityDisappearNotify";
import type {PacketNotifyDT} from "../../src/websocket/WSPacket";
import {world} from "../main";

export default function handle(data: PacketNotifyDT<SceneEntityDisappearNotify>)
{
    for(let entityId of data.PacketData.EntityList){
        const entity = world.entityList.get(entityId);

        //we rely on sceneteam to update avatar entities
        if(entity?.EntityType == ProtEntityType.PROT_ENTITY_TYPE_AVATAR){
            //set the avatar to an inactive state
            continue;
        };
        //wait a bit before deleting it
        setTimeout(() => {
            world.deregisterEntity(entityId, data.PacketData.DisappearType)
        }, 1000);
        
    }
    // console.log(`Deregistered ${data.PacketData.EntityList.length} entities`)
}