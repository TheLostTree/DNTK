/* eslint-disable */
import type { RoutePoint } from "./RoutePoint.ts";

export interface MonsterRoute {
  RoutePoints?: RoutePoint[];
  SpeedLevel?: number;
  RouteType?: number;
  ArriveRange?: number;
}
