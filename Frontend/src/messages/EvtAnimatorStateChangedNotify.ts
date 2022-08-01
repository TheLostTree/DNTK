/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { EvtAnimatorStateChangedInfo } from "./EvtAnimatorStateChangedInfo.ts";

/**
 * CmdId: 331
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAnimatorStateChangedNotify {
  ForwardType?: ForwardType;
  EvtAnimatorStateChangedInfo?: EvtAnimatorStateChangedInfo;
}
