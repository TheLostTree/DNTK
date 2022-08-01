/* eslint-disable */
import type { Vector } from "./Vector";
import type { HomePlantSubFieldData } from "./HomePlantSubFieldData";

export interface HomePlantFieldData {
  SubFieldList?: HomePlantSubFieldData[];
  FurnitureId?: number;
  SceneId?: number;
  FieldGuid?: number;
  SpawnPos?: Vector;
}
