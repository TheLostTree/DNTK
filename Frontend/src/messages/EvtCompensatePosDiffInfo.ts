/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface EvtCompensatePosDiffInfo {
  CurPos?: Vector;
  EntityId?: number;
  FaceAngleCompact?: number;
  CurHash?: number;
  NormalizedTimeCompact?: number;
}
