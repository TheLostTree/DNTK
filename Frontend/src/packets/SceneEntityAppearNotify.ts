import { ProtEntityType } from "../../src/messages/ProtEntityType";
import type { SceneEntityAppearNotify } from "../../src/messages/SceneEntityAppearNotify";
import type { PacketNotifyDT } from "../websocket/WSPacket";
import {world} from "../main";
import {Entity} from "../world/entity/Entity";

export default function handle(data: PacketNotifyDT<SceneEntityAppearNotify>){

    //todo: treat avatars differently

    for(let entity of data.PacketData.EntityList){

        //we rely on sceneteam to update avatar entities
        if(entity.EntityType == ProtEntityType.PROT_ENTITY_TYPE_AVATAR) {
            //todo:set the avatar to active state
            continue;
        }
                
        world.registerEntity(Entity.fromSceneEntity(entity), data.PacketData.AppearType)
    }
    // console.log(`Registered ${data.PacketData.EntityList.length} entities...`)

}