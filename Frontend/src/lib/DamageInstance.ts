import type { EvtBeingHitInfo } from "src/messages/EvtBeingHitInfo";

export interface DamageInstance {
    
    //todo: modify this hitinfo to allow for strings instead of ids for friendly reading
    hitInfo: EvtBeingHitInfo
    time: bigint
}

let items: DamageInstance[] = [];

export {items}
