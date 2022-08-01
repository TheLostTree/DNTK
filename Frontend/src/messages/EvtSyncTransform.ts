/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface EvtSyncTransform {
  EntityId?: number;
  EntityPos?: Vector;
  EntityRot?: Vector;
}
