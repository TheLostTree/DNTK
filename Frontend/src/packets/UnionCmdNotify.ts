import type {UnionCmdNotify} from "src/messages/UnionCmdNotify";
import type {PacketNotifyDT} from "src/websocket/WSPacket";
import {router} from "../main";

//todo: fix in backend
const AbilityInvokeCmdId = 1198;

export default function handle(data: PacketNotifyDT<UnionCmdNotify>) {

    //the sent data is acutlaly lying to you sorry it doesnt match the interface
    for(let cmd of data.PacketData.CmdList){
        router.handle(cmd.MessageId == AbilityInvokeCmdId ? "AbilityInvocationsNotify" : "CombatInvocationsNotify", {
            PacketData: cmd.Body,
            PacketHead: data.PacketHead,
            CmdID: cmd.MessageId == AbilityInvokeCmdId ? "AbilityInvocationsNotify" : "CombatInvocationsNotify",
            Sender: data.Sender,
        })
    }
    return;
}