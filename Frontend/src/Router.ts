import type { PacketNotifyData } from "./websocket/WSPacket";
import SceneEntityHandle from "./packets/SceneEntityAppearNotify";
import SceneEntityDisHandle from "./packets/SceneEntityDisappearNotify";
import CombatInvokeHandle from "./packets/CombatInvocationsNotify"
import UnionInvokeHandle from "./packets/UnionCmdNotify"
import EntityFightPropUpdateHandle from "./packets/EntityFightPropUpdateNotify"
import EvtCreateGadgetHandle from "./packets/EvtCreateGadgetNotify";
import SceneTeamHandle from "./packets/SceneTeamUpdateNotify";
import EvtDestroyGadgetHandle from "./packets/EvtDestroyGadgetNotify";
import PlayerEnterSceneInfoHandle from "./packets/PlayerEnterSceneInfoNotify";
import AbilityInvokeHandle from "./packets/AbilityInvocationsNotify"
import { log } from "./main";
import Base64 from "./b64";

const doNotLog = [
    "GetPlayerTokenReq",
    "GetPlayerTokenRsp",
    "PlayerLoginReq",
    "PlayerLoginRsp",
    "WindSeedClientNotify"
]
export default class Router{
    routes: Record<string, (pkt: PacketNotifyData)=> void> = {};

    constructor(){
        // register all the handlers here
        // it'll be ugly but i dont trust dynamic imports
        this.register("SceneEntityAppearNotify", SceneEntityHandle)
        this.register("SceneEntityDisappearNotify", SceneEntityDisHandle)
        this.register("CombatInvocationsNotify", CombatInvokeHandle)
        this.register("EvtCreateGadgetNotify", EvtCreateGadgetHandle)
        this.register("EntityFightPropUpdateNotify", EntityFightPropUpdateHandle)
        this.register("SceneTeamUpdateNotify", SceneTeamHandle)
        this.register("UnionCmdNotify", UnionInvokeHandle)
        this.register("EvtDestroyGadgetNotify", EvtDestroyGadgetHandle)
        this.register("PlayerEnterSceneInfoNotify", PlayerEnterSceneInfoHandle)
        this.register("AbilityInvocationsNotify", AbilityInvokeHandle)
    }
    public register(path: string, handler: (pkt: PacketNotifyData)=> void){
        this.routes[path] = handler;
    }
    
    public handle(path: string, pkt: PacketNotifyData){
        if(this.routes[path]){
            this.routes[path](pkt);
        }

        //todo: do special handling for ability invokes and combat invokes and unioncmdnotify to give the enums string values
        //because ideally we dont require the user to know the cmdids/protobufs
        let data = {
            time: pkt.PacketHead.SentMs,
            sender: pkt.Sender,
            data: pkt.PacketData,
            cmd: pkt.CmdID,
        }
        //DO NOT SHARE YOUR LOGS WITH SOMEONE ELSE IT MAY CONTAIN YOUR ACCOUNT TOKEN DATA
        if(doNotLog.includes(pkt.CmdID)){
            //these are only the ones i can remember off the top of my head
            data.data = {_info: "REDACTED"}
        }

        this.AddToLog(JSON.stringify(data));

    }

    public AddToLog(data:string){   
        if(typeof data === "string"){
            log.push(Base64.encode(data));
        }else{
            console.log(data)
            log.push(Base64.encode(JSON.stringify(data)));
        }
    }
}