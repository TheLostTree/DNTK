/* eslint-disable */
import type { Vector } from "./Vector";

export interface EvtSyncEntityPositionInfo {
  EntityId?: number;
  NormalizedTimeCompact?: number;
  StateHash?: number;
  FaceAngleCompact?: number;
  Pos?: Vector;
}
