/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";

/**
 * CmdId: 381
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtEntityStartDieEndNotify {
  Immediately?: boolean;
  DieStateFlag?: number;
  EntityId?: number;
  ForwardType?: ForwardType;
}
