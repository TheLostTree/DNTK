/* eslint-disable */
import type { FleurFairFallSettleInfo } from "./FleurFairFallSettleInfo";

/**
 * CmdId: 2017
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FleurFairFallSettleNotify {
  MinigameId?: number;
  SettleInfoMap?: { [key: number]: FleurFairFallSettleInfo };
}

export interface FleurFairFallSettleNotify_SettleInfoMapEntry {
  Key: number;
  Value?: FleurFairFallSettleInfo;
}
