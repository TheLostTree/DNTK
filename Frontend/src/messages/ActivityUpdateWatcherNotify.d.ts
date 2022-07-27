/* eslint-disable */
import type { ActivityWatcherInfo } from "./ActivityWatcherInfo.d.ts";

/**
 * CmdId: 2156
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ActivityUpdateWatcherNotify {
  WatcherInfo?: ActivityWatcherInfo;
  ActivityId?: number;
}
