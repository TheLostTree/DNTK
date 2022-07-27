/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { EvtBeingHitInfo } from "./EvtBeingHitInfo.d.ts";

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
