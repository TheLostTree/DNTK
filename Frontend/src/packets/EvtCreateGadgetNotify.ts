import type {EvtCreateGadgetNotify} from "src/messages/EvtCreateGadgetNotify";
import type {PacketNotifyDT} from "src/websocket/WSPacket";
import {world} from "../main";
import {Entity} from "../world/entity/Entity";

export default function handle(data: PacketNotifyDT<EvtCreateGadgetNotify>) {
    const entity = Entity.fromEvtCreateGadget(data.PacketData);
    world.registerEntity(entity);
    // console.log(`Registered entity ${entity.getFriendlyName()} owned by ${world.entityList.get(entity.OwnerId).getFriendlyName()}...`)
}