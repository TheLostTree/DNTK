/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { EvtAnimatorStateChangedInfo } from "./EvtAnimatorStateChangedInfo";

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
