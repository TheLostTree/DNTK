/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface EvtFixedRushMove {
  EntityId?: number;
  Speed?: number;
  NeedSetIsInAir?: boolean;
  AnimatorStateIdList?: number[];
  TargetPos?: Vector;
  CheckAnimatorStateOnExitOnly?: boolean;
  OverrideCollider?: string;
}
