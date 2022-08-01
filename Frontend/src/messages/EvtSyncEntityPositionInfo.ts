/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface EvtSyncEntityPositionInfo {
  EntityId?: number;
  NormalizedTimeCompact?: number;
  StateHash?: number;
  FaceAngleCompact?: number;
  Pos?: Vector;
}
