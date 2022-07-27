/* eslint-disable */
import type { DealAddFriendResultType } from "./DealAddFriendResultType.d.ts";

/**
 * CmdId: 4090
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DealAddFriendRsp {
  Retcode?: number;
  TargetUid?: number;
  DealAddFriendResult?: DealAddFriendResultType;
}
