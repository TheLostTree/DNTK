/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { HomeMarkPointFurnitureData } from "./HomeMarkPointFurnitureData.ts";

export interface HomeMarkPointSceneData {
  FurnitureList?: HomeMarkPointFurnitureData[];
  ModuleId?: number;
  SceneId?: number;
  TeapotSpiritPos?: Vector;
}
