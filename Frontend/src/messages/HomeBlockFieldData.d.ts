/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { HomeBlockSubFieldData } from "./HomeBlockSubFieldData.d.ts";

export interface HomeBlockFieldData {
  Rot?: Vector;
  Pos?: Vector;
  Guid?: number;
  FurnitureId?: number;
  SubFieldList?: HomeBlockSubFieldData[];
}
