/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { HomePlantSubFieldData } from "./HomePlantSubFieldData.d.ts";

export interface HomePlantFieldData {
  SubFieldList?: HomePlantSubFieldData[];
  FurnitureId?: number;
  SceneId?: number;
  FieldGuid?: number;
  SpawnPos?: Vector;
}
