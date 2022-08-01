/* eslint-disable */
import type { RoutePointChangeInfo } from "./RoutePointChangeInfo";

export interface SceneRouteChangeInfo {
  IsForward?: boolean;
  RouteId?: number;
  Type?: number;
  PointList?: RoutePointChangeInfo[];
}
