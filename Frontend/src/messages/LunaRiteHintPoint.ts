/* eslint-disable */
import type { LunaRiteHintPointType } from "./LunaRiteHintPointType.ts";
import type { Vector } from "./Vector.ts";

export interface LunaRiteHintPoint {
  AreaId?: number;
  Index?: number;
  Type?: LunaRiteHintPointType;
  Pos?: Vector;
}
