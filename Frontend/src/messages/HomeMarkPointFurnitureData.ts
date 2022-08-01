/* eslint-disable */
import type { Vector } from "./Vector";
import type { HomeMarkPointNPCData } from "./HomeMarkPointNPCData";
import type { HomeMarkPointSuiteData } from "./HomeMarkPointSuiteData";

export interface HomeMarkPointFurnitureData {
  Guid?: number;
  FurnitureId?: number;
  FurnitureType?: number;
  Pos?: Vector;
  NpcData?: HomeMarkPointNPCData | undefined;
  SuiteData?: HomeMarkPointSuiteData | undefined;
}
