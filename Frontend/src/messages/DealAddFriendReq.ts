/* eslint-disable */
import type { DealAddFriendResultType } from "./DealAddFriendResultType";

/**
 * CmdId: 4003
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DealAddFriendReq {
  DealAddFriendResult?: DealAddFriendResultType;
  TargetUid?: number;
}
