/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface AnchorPointData {
  SceneId?: number;
  AnchorPointId?: number;
  EndTime?: number;
  Pos?: Vector;
  Rot?: Vector;
}
