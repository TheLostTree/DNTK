/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { HomePlantSubFieldData } from "./HomePlantSubFieldData.ts";

export interface HomePlantFieldData {
  SubFieldList?: HomePlantSubFieldData[];
  FurnitureId?: number;
  SceneId?: number;
  FieldGuid?: number;
  SpawnPos?: Vector;
}
