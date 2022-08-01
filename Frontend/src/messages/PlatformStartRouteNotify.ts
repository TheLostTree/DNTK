/* eslint-disable */
import type { PlatformInfo } from "./PlatformInfo.ts";

/**
 * CmdId: 218
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlatformStartRouteNotify {
  Platform?: PlatformInfo;
  SceneTime?: number;
  EntityId?: number;
}
