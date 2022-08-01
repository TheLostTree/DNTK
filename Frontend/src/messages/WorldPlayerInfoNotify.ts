/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.ts";

/**
 * CmdId: 3116
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface WorldPlayerInfoNotify {
  PlayerUidList?: number[];
  PlayerInfoList?: OnlinePlayerInfo[];
}
