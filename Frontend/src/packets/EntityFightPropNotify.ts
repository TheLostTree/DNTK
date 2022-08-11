import type {EntityFightPropNotify} from "src/messages/EntityFightPropNotify";
import type {PacketNotifyDT} from "src/websocket/WSPacket";

export default function handle(data: PacketNotifyDT<EntityFightPropNotify>) {
    //this one looks like a carbon copy of EntityFightPropUpdateNotify
    //if this one also does get used i'll send it over to the same handler ig
    console.log(data.PacketData)
}