/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { HomeBlockSubFieldData } from "./HomeBlockSubFieldData.ts";

export interface HomeBlockFieldData {
  Rot?: Vector;
  Pos?: Vector;
  Guid?: number;
  FurnitureId?: number;
  SubFieldList?: HomeBlockSubFieldData[];
}
