/* eslint-disable */
import type { PlayerRTTInfo } from "./PlayerRTTInfo.d.ts";

/**
 * CmdId: 22
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WorldPlayerRTTNotify {
  PlayerRttList?: PlayerRTTInfo[];
}
