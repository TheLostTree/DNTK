/* eslint-disable */
import type { Vector } from "./Vector";
import type { HomeMarkPointFurnitureData } from "./HomeMarkPointFurnitureData";

export interface HomeMarkPointSceneData {
  FurnitureList?: HomeMarkPointFurnitureData[];
  ModuleId?: number;
  SceneId?: number;
  TeapotSpiritPos?: Vector;
}
