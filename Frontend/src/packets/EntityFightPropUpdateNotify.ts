import type {EntityFightPropUpdateNotify} from "../../src/messages/EntityFightPropUpdateNotify";
import type {PacketNotifyDT} from "../../src/websocket/WSPacket";
import {world} from "../main";
import type {Entity} from "../world/entity/Entity";
import {FightProperties} from "../world/props";

export default function handle(data: PacketNotifyDT<EntityFightPropUpdateNotify>) {
    //this packet changes stats

    let entity : Entity= world.entityList.get(data.PacketData.EntityId);
    if(entity){
        for(let key of Object.keys(data.PacketData.FightPropMap)){

            let fp = Number(key);
            let diff = entity.getFightProp(fp) - data.PacketData.FightPropMap[key];

            entity.setFightProp(fp, data.PacketData.FightPropMap[key])
            // conso    le.log(`FightProp ${FightProperties[fp]} ${diff < 0 ? "increased": "decreased"} by ${Math.abs(diff)}`)
        }
    }else{
        console.log(`FightPropUpdate for nonexistent entity ${data.PacketData.EntityId} found...`)
    }

}