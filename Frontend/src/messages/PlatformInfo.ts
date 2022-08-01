/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { MathQuaternion } from "./MathQuaternion.ts";
import type { MovingPlatformType } from "./MovingPlatformType.ts";
import type { Route } from "./Route.ts";

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
