import type { SceneEntityAppearNotify } from "src/messages/SceneEntityAppearNotify";
import type { PacketNotifyDT } from "src/websocket/WSPacket";
import {world} from "../main";
import {Entity} from "../world/entity/Entity";

export default function handle(data: PacketNotifyDT<SceneEntityAppearNotify>){

    //todo: treat avatars differently

    for(let entity of data.PacketData.EntityList){
        world.registerEntity(Entity.fromSceneEntity(entity), data.PacketData.AppearType)
    }
    console.log(`Registered ${data.PacketData.EntityList.length} entities...`)

}