/* eslint-disable */
import type { Vector } from "./Vector.ts";

export interface HomeFurnitureSuiteData {
  IsAllowSummon?: boolean;
  SuiteId?: number;
  SpawnPos?: Vector;
  Guid?: number;
  IncludedFurnitureIndexList?: number[];
}
