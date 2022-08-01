/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { EvtBeingHitInfo } from "./EvtBeingHitInfo";

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
