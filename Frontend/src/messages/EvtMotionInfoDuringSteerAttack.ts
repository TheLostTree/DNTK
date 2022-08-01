/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface EvtMotionInfoDuringSteerAttack {
  FaceDir?: Vector;
  Velocity?: Vector;
  Pos?: Vector;
  EntityId?: number;
}
