/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { EvtBeingHitInfo } from "./EvtBeingHitInfo";

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
