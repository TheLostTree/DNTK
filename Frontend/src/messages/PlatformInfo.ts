/* eslint-disable */
import type { Vector } from "./Vector";
import type { MathQuaternion } from "./MathQuaternion";
import type { MovingPlatformType } from "./MovingPlatformType";
import type { Route } from "./Route";

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
