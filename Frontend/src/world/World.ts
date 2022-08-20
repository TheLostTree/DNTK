import {Entity} from "./entity/Entity";
import {VisionType} from "../messages/VisionType";
import FriendlyNames from "../resources/FriendlyNames.json";

export default class World {

    entityList: Map<number, Entity> = new Map();


    registerEntity(entity: Entity, type: VisionType = VisionType.VISION_TYPE_BORN){
        this.entityList.set(entity.EntityId, entity);
    }

    deregisterEntity(EntityId: number, type: VisionType = VisionType.VISION_TYPE_MISS){
        this.entityList.delete(EntityId);
    }

    getOwner(entity: Entity){
        if(!entity) return undefined
        if(Entity.isGadget(entity)){
            return this.entityList.get(entity.OwnerId) || entity;
        }
        return entity
    }

    getFriendlyName(entity: Entity){
        let id = 0;
        if(Entity.isAvatar(entity)){
            id = entity.Avatar.AvatarId;
        }
        if(Entity.isGadget(entity)){
            id = entity.Gadget.GadgetId;
        }
        if(Entity.isMonster(entity)){
            id = entity.Monster.MonsterId;
        }
        // console.log(`${id} : ${FriendlyNames[id]}`)
        return FriendlyNames[id];
    }


}