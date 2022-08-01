/* eslint-disable */
import type { EvtAnimatorParameterInfo } from "./EvtAnimatorParameterInfo.ts";
import type { ForwardType } from "./ForwardType.ts";

/**
 * CmdId: 398
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAnimatorParameterNotify {
  AnimatorParamInfo?: EvtAnimatorParameterInfo;
  ForwardType?: ForwardType;
}
