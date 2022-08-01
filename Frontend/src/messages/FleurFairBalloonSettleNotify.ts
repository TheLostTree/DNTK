/* eslint-disable */
import type { FleurFairBalloonSettleInfo } from "./FleurFairBalloonSettleInfo.ts";

/**
 * CmdId: 2099
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FleurFairBalloonSettleNotify {
  MinigameId?: number;
  SettleInfoMap?: { [key: number]: FleurFairBalloonSettleInfo };
}

export interface FleurFairBalloonSettleNotify_SettleInfoMapEntry {
  Key: number;
  Value?: FleurFairBalloonSettleInfo;
}
