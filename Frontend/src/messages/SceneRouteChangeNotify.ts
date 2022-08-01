/* eslint-disable */
import type { SceneRouteChangeInfo } from "./SceneRouteChangeInfo";

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
