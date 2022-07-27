/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { EvtSetAttackTargetInfo } from "./EvtSetAttackTargetInfo.d.ts";

/**
 * CmdId: 399
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtSetAttackTargetNotify {
  ForwardType?: ForwardType;
  EvtSetAttackTargetInfo?: EvtSetAttackTargetInfo;
}
