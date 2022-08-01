/* eslint-disable */
import type { Vector } from "./Vector";

export interface EvtCompensatePosDiffInfo {
  CurPos?: Vector;
  EntityId?: number;
  FaceAngleCompact?: number;
  CurHash?: number;
  NormalizedTimeCompact?: number;
}
