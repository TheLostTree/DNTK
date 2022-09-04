import {ProtEntityType} from "../../messages/ProtEntityType";
import type {MotionInfo} from "../../messages/MotionInfo";
import type {SceneAvatarInfo} from "../../messages/SceneAvatarInfo";
import type {SceneMonsterInfo} from "../../messages/SceneMonsterInfo";
import type {SceneGadgetInfo} from "../../messages/SceneGadgetInfo";
import type {FightProperties, Properties} from "../props";
import type {PropValue} from "../../messages/PropValue";
import type {SceneEntityInfo} from "../../messages/SceneEntityInfo";
import type {EvtCreateGadgetNotify} from "../../messages/EvtCreateGadgetNotify";
import type {MPLevelEntityInfo} from "../../messages/MPLevelEntityInfo";
import FriendlyNames from "../../resources/FriendlyNames.json";


export class Entity {
    EntityType: ProtEntityType;
    EntityId: number;
    MotionInfo: MotionInfo = {};

    PropList: Record<number, PropValue> = {};
    FightPropList: Record<number, number> = {};

    name: string;


    //i think this is generally only in Gadget but meh
    OwnerId: number = 0;

    /*
        I really don't think these are necessary
        at the very least I don't know how to make sense of them


        AnimatorParaList?: AnimatorParameterValueInfoPair[];
        LastMoveSceneTimeMs?: number;
        LastMoveReliableSeq?: number;
        EntityClientData?: EntityClientData;
        EntityEnvironmentInfoList?: EntityEnvironmentInfo[];
        EntityAuthorityInfo?: EntityAuthorityInfo;
        TagList?: string[];
        ServerBuffList?: ServerBuff[];

    */



    getProp(prop: Properties) {
        return this.PropList[prop]
    }

    setProp(prop: Properties, value: PropValue) {
        return this.PropList[prop] = value;
    }


    getFightProp(prop: FightProperties) {
        return this.FightPropList[prop];
    }

    setFightProp(prop: FightProperties, value: number) {
        return this.FightPropList[prop] = value;
    }

    getFriendlyName(): string{
        return "Unknown"
    }


    static isGadget(entity: Entity): entity is Gadget {
        return typeof (<Gadget>entity).Gadget !== "undefined"
    }
    static isAvatar(entity: Entity): entity is Avatar {
        return typeof (<Avatar>entity).Avatar !== "undefined"
    }
    static isMonster(entity: Entity): entity is Monster {
        return typeof (<Monster>entity).Monster !== "undefined"
    }

    static fromSceneEntity(sceneEntity: SceneEntityInfo){
        let entity: Entity;
        if(sceneEntity.EntityType == ProtEntityType.PROT_ENTITY_TYPE_GADGET){
            entity = new Gadget();
            (<Gadget>entity).Gadget = sceneEntity.Gadget
        }else if(sceneEntity.EntityType == ProtEntityType.PROT_ENTITY_TYPE_AVATAR){
            entity = new Avatar();
            (<Avatar>entity).Avatar = sceneEntity.Avatar
        }else if(sceneEntity.EntityType == ProtEntityType.PROT_ENTITY_TYPE_MONSTER){
            entity = new Monster();
            (<Monster>entity).Monster = sceneEntity.Monster
        }else{
            //npc entity exists as well but ehhhh
            entity = new Entity();
        }

        entity.MotionInfo = sceneEntity.MotionInfo;
        entity.EntityId = sceneEntity.EntityId;

        sceneEntity.PropList.forEach((v,k)=>{
            entity.setProp(v.Type, v.PropValue)
        });

        sceneEntity.FightPropList.forEach((v,k)=>{
            entity.setFightProp(v.PropType, v.PropValue)
        })

        //if any of the other fields turn out to be useful add them here

        return entity
    }

    static fromEvtCreateGadget(createGadget: EvtCreateGadgetNotify){
        let a = new Gadget();
        a.EntityId = createGadget.EntityId;

        //there's also a prop owner entityid im not quite sure what the difference is
        a.OwnerId = createGadget.OwnerEntityId;

        a.MotionInfo["pos"] = createGadget.InitPos;
        a.MotionInfo["rot"] = createGadget.InitEulerAngles

        a.Gadget = {
            GadgetId : createGadget.ConfigId,
            ConfigId : createGadget.ConfigId,
            OwnerEntityId : createGadget.OwnerEntityId
        }
        //this is not *fully* accurate
        //but should be good enough


        return a;
    }

    static fromMPLevelEntityInfo(entityInfo: MPLevelEntityInfo ){
        let a = new MPLevel();
        a.EntityId = entityInfo.EntityId;
        a.AuthorityPeerId = entityInfo.AuthorityPeerId
        a.name = "MPLevel";
        return a;
    }

    setMoveInfo(data: MotionInfo){
        this.MotionInfo = data;
    }

}

export class MPLevel extends Entity {
    EntityType = ProtEntityType.PROT_ENTITY_TYPE_MP_LEVEL
    //this entity doesnt have anything special
    AuthorityPeerId:number;

    getFriendlyName(): string{
        return "MPLevel"

    }
}

export class Avatar extends Entity {
    EntityType = ProtEntityType.PROT_ENTITY_TYPE_AVATAR
    Avatar: SceneAvatarInfo;

    getFriendlyName(): string{
        return FriendlyNames[this.Avatar.AvatarId] || this.Avatar.AvatarId.toString();
    }
}

export class Monster extends Entity {
    EntityType = ProtEntityType.PROT_ENTITY_TYPE_MONSTER
    Monster: SceneMonsterInfo;

    getFriendlyName(): string{
        return FriendlyNames[this.Monster.MonsterId] || this.Monster.MonsterId.toString();
    }
}


export class Gadget extends Entity {
    EntityType = ProtEntityType.PROT_ENTITY_TYPE_GADGET
    Gadget: SceneGadgetInfo;

    getFriendlyName(): string{
        return FriendlyNames[this.Gadget.GadgetId] || this.Gadget.GadgetId.toString();
    }
}

