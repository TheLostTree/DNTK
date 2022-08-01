/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface HomeFurnitureData {
  Version?: number;
  ParentFurnitureIndex?: number;
  FurnitureId?: number;
  Guid?: number;
  SpawnRot?: Vector;
  SpawnPos?: Vector;
}
