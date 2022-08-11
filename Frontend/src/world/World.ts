import type {Entity} from "./entity/Entity";
import {VisionType} from "../messages/VisionType";

export default class World {

    entityList: Map<number, Entity> = new Map();


    registerEntity(entity: Entity, type: VisionType = VisionType.VISION_TYPE_BORN){
        this.entityList[entity.EntityId] = entity;
    }

    deregisterEntity(EntityId: number, type: VisionType = VisionType.VISION_TYPE_MISS){
        delete this.entityList[EntityId];
    }


}