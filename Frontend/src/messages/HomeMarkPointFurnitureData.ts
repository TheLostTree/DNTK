/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { HomeMarkPointNPCData } from "./HomeMarkPointNPCData.ts";
import type { HomeMarkPointSuiteData } from "./HomeMarkPointSuiteData.ts";

export interface HomeMarkPointFurnitureData {
  Guid?: number;
  FurnitureId?: number;
  FurnitureType?: number;
  Pos?: Vector;
  NpcData?: HomeMarkPointNPCData | undefined;
  SuiteData?: HomeMarkPointSuiteData | undefined;
}
