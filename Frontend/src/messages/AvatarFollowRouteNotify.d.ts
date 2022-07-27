/* eslint-disable */
import type { Route } from "./Route.d.ts";

/**
 * CmdId: 3458
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarFollowRouteNotify {
  ClientParams?: string;
  EntityId?: number;
  Route?: Route;
  StartSceneTimeMs?: number;
}
