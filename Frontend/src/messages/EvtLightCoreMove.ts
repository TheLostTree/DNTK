/* eslint-disable */
import type { Vector } from "./Vector";

export interface EvtLightCoreMove {
  TargetPos?: Vector;
  Acelerate?: number;
  EntityId?: number;
  MaxAbsorbTime?: number;
  Speed?: number;
}
