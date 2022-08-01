/* eslint-disable */
import type { Vector } from "./Vector";
import type { HomeBlockSubFieldData } from "./HomeBlockSubFieldData";

export interface HomeBlockFieldData {
  Rot?: Vector;
  Pos?: Vector;
  Guid?: number;
  FurnitureId?: number;
  SubFieldList?: HomeBlockSubFieldData[];
}
