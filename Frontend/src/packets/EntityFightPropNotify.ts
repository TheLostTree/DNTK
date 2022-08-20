import { world } from "../../src/main";
import type {EntityFightPropNotify} from "../../src/messages/EntityFightPropNotify";
import type {PacketNotifyDT} from "../../src/websocket/WSPacket";

export default function handle(data: PacketNotifyDT<EntityFightPropNotify>) {
    //this one looks like a carbon copy of EntityFightPropUpdateNotify
    //if this one also does get used i'll send it over to the same handler ig
    const entity = world.entityList.get(data.PacketData.EntityId);
    if(entity){
        for(let key of Object.keys(data.PacketData.FightPropMap)){
            let fp = Number(key);
            entity.setFightProp(fp, data.PacketData.FightPropMap[key])
        }
    }
}