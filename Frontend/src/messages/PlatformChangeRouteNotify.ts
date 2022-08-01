/* eslint-disable */
import type { PlatformInfo } from "./PlatformInfo.ts";

/**
 * CmdId: 268
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlatformChangeRouteNotify {
  EntityId?: number;
  Platform?: PlatformInfo;
  SceneTime?: number;
}
