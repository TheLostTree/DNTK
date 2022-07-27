/* eslint-disable */
import type { RoutePointChangeInfo } from "./RoutePointChangeInfo.d.ts";

export interface SceneRouteChangeInfo {
  IsForward?: boolean;
  RouteId?: number;
  Type?: number;
  PointList?: RoutePointChangeInfo[];
}
