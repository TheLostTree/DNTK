/* eslint-disable */
import type { SceneRouteChangeInfo } from "./SceneRouteChangeInfo.ts";

/**
 * CmdId: 240
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneRouteChangeNotify {
  SceneId?: number;
  SceneTime?: number;
  RouteList?: SceneRouteChangeInfo[];
}
