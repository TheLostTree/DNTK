/* eslint-disable */
import type { Vector } from "./Vector";
import type { MathQuaternion } from "./MathQuaternion";

export interface RoutePoint {
  Position?: Vector;
  ArriveRange?: number;
  Velocity?: number | undefined;
  Time?: number | undefined;
  Rotation?: Vector | undefined;
  RotationSpeed?: MathQuaternion | undefined;
  AxisSpeed?: MathQuaternion | undefined;
}
