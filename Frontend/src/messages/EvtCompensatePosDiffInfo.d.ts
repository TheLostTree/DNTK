/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

export interface EvtCompensatePosDiffInfo {
  CurPos?: Vector;
  EntityId?: number;
  FaceAngleCompact?: number;
  CurHash?: number;
  NormalizedTimeCompact?: number;
}
