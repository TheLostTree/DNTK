/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { HomeMarkPointFurnitureData } from "./HomeMarkPointFurnitureData.d.ts";

export interface HomeMarkPointSceneData {
  FurnitureList?: HomeMarkPointFurnitureData[];
  ModuleId?: number;
  SceneId?: number;
  TeapotSpiritPos?: Vector;
}
