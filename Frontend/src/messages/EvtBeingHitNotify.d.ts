/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { EvtBeingHitInfo } from "./EvtBeingHitInfo.d.ts";

/**
 * CmdId: 372
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtBeingHitNotify {
  ForwardType?: ForwardType;
  BeingHitInfo?: EvtBeingHitInfo;
}
