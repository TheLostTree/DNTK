/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface EvtCombatSteerMotionInfo {
  Pos?: Vector;
  Velocity?: Vector;
  EntityId?: number;
  FaceDir?: Vector;
}
