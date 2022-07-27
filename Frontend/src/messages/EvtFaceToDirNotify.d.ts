/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { EvtFaceToDirInfo } from "./EvtFaceToDirInfo.d.ts";

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
