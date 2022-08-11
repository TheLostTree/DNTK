import type {SceneTeamUpdateNotify} from "src/messages/SceneTeamUpdateNotify";
import type {PacketNotifyDT} from "src/websocket/WSPacket";
import {Entity} from "../world/entity/Entity";
import {VisionType} from "../messages/VisionType";
import {world} from "../main";
import {ProtEntityType} from "../messages/ProtEntityType";

export default function handle(data: PacketNotifyDT<SceneTeamUpdateNotify>) {
    let newAvatars: Record<number, Entity>  = {};

    //add new avatars
    for(let ent of data.PacketData.SceneTeamAvatarList)
    {
        //for some reason server first sends us a reply without the entity ids filled, so we have to ignore default value
        if (ent.SceneEntityInfo.EntityId != 0)
        {
            if (!(ent.EntityId in world.entityList))
            {
                world.registerEntity(Entity.fromSceneEntity(ent.SceneEntityInfo), VisionType.VISION_TYPE_BORN);
            }
            newAvatars[ent.EntityId] =  world.entityList[ent.EntityId];
        }
    }

    //remove any old avatars
    for(let [entityID, entity] of world.entityList){
        if(entity.EntityType == ProtEntityType.PROT_ENTITY_TYPE_AVATAR){
            if(!(entityID in newAvatars)){
                world.deregisterEntity(entityID, VisionType.VISION_TYPE_REMOVE)
            }
        }
    }
}