/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface EvtFixedRushMove {
  EntityId?: number;
  Speed?: number;
  NeedSetIsInAir?: boolean;
  AnimatorStateIdList?: number[];
  TargetPos?: Vector;
  CheckAnimatorStateOnExitOnly?: boolean;
  OverrideCollider?: string;
}
