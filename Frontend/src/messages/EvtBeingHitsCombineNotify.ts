/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { EvtBeingHitInfo } from "./EvtBeingHitInfo.ts";

/**
 * CmdId: 346
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtBeingHitsCombineNotify {
  ForwardType?: ForwardType;
  EvtBeingHitInfoList?: EvtBeingHitInfo[];
}
