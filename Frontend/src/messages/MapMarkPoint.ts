/* eslint-disable */
import type { Vector } from "./Vector";
import type { MapMarkPointType } from "./MapMarkPointType";
import type { MapMarkFromType } from "./MapMarkFromType";

export interface MapMarkPoint {
  SceneId?: number;
  Name?: string;
  Pos?: Vector;
  PointType?: MapMarkPointType;
  MonsterId?: number;
  FromType?: MapMarkFromType;
  QuestId?: number;
}
