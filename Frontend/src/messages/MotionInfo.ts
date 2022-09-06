/* eslint-disable */
import type { Vector } from "./Vector";
import type { MotionState } from "./MotionState";
import Long from "long";

export interface MotionInfo {
  Pos?: Vector;
  Rot?: Vector;
  Speed?: Vector;
  State?: MotionState;
  Params?: Vector[];
  RefPos?: Vector;
  RefId?: number;
  SceneTime?: number;
  IntervalVelocity?: Long;
}
