
import type {PacketNotifyDT} from "src/websocket/WSPacket";
import {world} from "../main";
import type { EvtDestroyGadgetNotify } from "../messages/EvtDestroyGadgetNotify";
import {Entity} from "../world/entity/Entity";

export default function handle(data: PacketNotifyDT<EvtDestroyGadgetNotify>) {
    setTimeout(() => {
        //wait a bit before deleting it for processing reasons
        world.deregisterEntity(data.PacketData.EntityId);
    }, 5000);
}