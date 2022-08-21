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
    }
}