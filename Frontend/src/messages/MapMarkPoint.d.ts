/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { MapMarkPointType } from "./MapMarkPointType.d.ts";
import type { MapMarkFromType } from "./MapMarkFromType.d.ts";

export interface MapMarkPoint {
  SceneId?: number;
  Name?: string;
  Pos?: Vector;
  PointType?: MapMarkPointType;
  MonsterId?: number;
  FromType?: MapMarkFromType;
  QuestId?: number;
}
