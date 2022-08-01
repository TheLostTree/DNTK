/* eslint-disable */
import type { PlayerRTTInfo } from "./PlayerRTTInfo";

/**
 * CmdId: 22
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WorldPlayerRTTNotify {
  PlayerRttList?: PlayerRTTInfo[];
}
