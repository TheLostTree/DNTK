/* eslint-disable */
import type { Route } from "./Route.ts";

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
