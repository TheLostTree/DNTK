/* eslint-disable */
import type { ForgeQueueManipulateType } from "./ForgeQueueManipulateType";

/**
 * CmdId: 624
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ForgeQueueManipulateReq {
  ForgeQueueId?: number;
  ManipulateType?: ForgeQueueManipulateType;
}
