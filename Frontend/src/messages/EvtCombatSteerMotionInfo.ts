/* eslint-disable */
import type { Vector } from "./Vector";

export interface EvtCombatSteerMotionInfo {
  Pos?: Vector;
  Velocity?: Vector;
  EntityId?: number;
  FaceDir?: Vector;
}
