/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { MathQuaternion } from "./MathQuaternion.d.ts";
import type { MovingPlatformType } from "./MovingPlatformType.d.ts";
import type { Route } from "./Route.d.ts";

export interface PlatformInfo {
  RouteId?: number;
  StartIndex?: number;
  StartRouteTime?: number;
  StartSceneTime?: number;
  StartPos?: Vector;
  IsStarted?: boolean;
  StartRot?: MathQuaternion;
  StopSceneTime?: number;
  PosOffset?: Vector;
  RotOffset?: MathQuaternion;
  MovingPlatformType?: MovingPlatformType;
  IsActive?: boolean;
  Route?: Route;
  PointId?: number;
}
