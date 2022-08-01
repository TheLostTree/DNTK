/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { MapMarkPointType } from "./MapMarkPointType.ts";
import type { MapMarkFromType } from "./MapMarkFromType.ts";

export interface MapMarkPoint {
  SceneId?: number;
  Name?: string;
  Pos?: Vector;
  PointType?: MapMarkPointType;
  MonsterId?: number;
  FromType?: MapMarkFromType;
  QuestId?: number;
}
