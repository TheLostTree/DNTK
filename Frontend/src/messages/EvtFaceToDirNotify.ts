/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { EvtFaceToDirInfo } from "./EvtFaceToDirInfo";

/**
 * CmdId: 390
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtFaceToDirNotify {
  ForwardType?: ForwardType;
  EvtFaceToDirInfo?: EvtFaceToDirInfo;
}
