import type {EvtCreateGadgetNotify} from "src/messages/EvtCreateGadgetNotify";
import type {PacketNotifyDT} from "src/websocket/WSPacket";
import {world} from "../main";
import {Entity} from "../world/entity/Entity";

export default function handle(data: PacketNotifyDT<EvtCreateGadgetNotify>) {
    world.registerEntity(Entity.fromEvtCreateGadget(data.PacketData));
}