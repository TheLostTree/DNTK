/* eslint-disable */
import type { ReunionWatcherInfo } from "./ReunionWatcherInfo.ts";

/**
 * CmdId: 5091
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface UpdateReunionWatcherNotify {
  MissionId?: number;
  WatcherInfo?: ReunionWatcherInfo;
}
