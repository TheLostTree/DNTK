/* eslint-disable */
import type { MathQuaternion } from "./MathQuaternion";
import type { Vector } from "./Vector";
import type { Vector3Int } from "./Vector3Int";

export interface ObstacleInfo {
  Rotation?: MathQuaternion;
  ObstacleId?: number;
  Center?: Vector;
  Shape?: ObstacleInfo_ShapeType;
  Extents?: Vector3Int;
}

export enum ObstacleInfo_ShapeType {
  SHAPE_TYPE_OBSTACLE_SHAPE_CAPSULE = 0,
  SHAPE_TYPE_OBSTACLE_SHAPE_BOX = 1,
  UNRECOGNIZED = -1,
}
