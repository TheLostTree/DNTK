/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { HomeMarkPointNPCData } from "./HomeMarkPointNPCData.d.ts";
import type { HomeMarkPointSuiteData } from "./HomeMarkPointSuiteData.d.ts";

export interface HomeMarkPointFurnitureData {
  Guid?: number;
  FurnitureId?: number;
  FurnitureType?: number;
  Pos?: Vector;
  NpcData?: HomeMarkPointNPCData | undefined;
  SuiteData?: HomeMarkPointSuiteData | undefined;
}
