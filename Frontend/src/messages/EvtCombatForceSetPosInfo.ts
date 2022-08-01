/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface EvtCombatForceSetPosInfo {
  IceId?: number;
  ColliderEntityId?: number;
  EntityId?: number;
  TargetPos?: Vector;
}
