import {Entity} from "./entity/Entity";
import {VisionType} from "../messages/VisionType";

export default class World {

    entityList: Map<number, Entity> = new Map();


    registerEntity(entity: Entity, type: VisionType = VisionType.VISION_TYPE_BORN){
        this.entityList.set(entity.EntityId, entity);
    }

    deregisterEntity(EntityId: number, type: VisionType = VisionType.VISION_TYPE_MISS){
        this.entityList.delete(EntityId);
    }


    //this isnt really working

    getOwner(entityId: number){
        const entity = this.entityList.get(entityId);
        if(!entity) return undefined
        if(Entity.isGadget(entity)){
            return this.entityList.get(entity.OwnerId);
        }
        return undefined
    }

    getRootOwner(entityId: number){
        
        const entity = this.entityList.get(entityId);
        
        const newEntity = this.getOwner(entityId)

        if(!newEntity) {
            return entity
        }
        if(newEntity.OwnerId == entityId) {
            return newEntity
        }


        return this.getRootOwner(newEntity.EntityId)
        

    }


}