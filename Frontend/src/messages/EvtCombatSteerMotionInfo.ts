/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface EvtCombatSteerMotionInfo {
  Pos?: Vector;
  Velocity?: Vector;
  EntityId?: number;
  FaceDir?: Vector;
}
