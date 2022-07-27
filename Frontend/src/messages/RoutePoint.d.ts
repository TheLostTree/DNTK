/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { MathQuaternion } from "./MathQuaternion.d.ts";

export interface RoutePoint {
  Position?: Vector;
  ArriveRange?: number;
  Velocity?: number | undefined;
  Time?: number | undefined;
  Rotation?: Vector | undefined;
  RotationSpeed?: MathQuaternion | undefined;
  AxisSpeed?: MathQuaternion | undefined;
}
