import type { CombatInvocationsNotify } from "src/messages/CombatInvocationsNotify";
import type { PacketNotifyDT } from "src/websocket/WSPacket";

export default function handle(data: PacketNotifyDT<CombatInvocationsNotify>){
    if(data.Sender == "Client"){
        return;
    }
    console.log(data.Sender)

    //do actual damage parsing here
    //entityfp update notify is for energy, and syncing values, not damage parsing



}