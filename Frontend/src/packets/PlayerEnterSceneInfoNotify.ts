import type {PacketNotifyDT} from "src/websocket/WSPacket";
import {world} from "../main";
import type { PlayerEnterSceneInfoNotify } from "../messages/PlayerEnterSceneInfoNotify";
import {Entity} from "../world/entity/Entity";

export default function handle(data: PacketNotifyDT<PlayerEnterSceneInfoNotify>) {
    world.registerEntity(Entity.fromMPLevelEntityInfo(data.PacketData.MpLevelEntityInfo));
}