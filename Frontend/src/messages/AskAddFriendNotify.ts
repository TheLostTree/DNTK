/* eslint-disable */
import type { FriendBrief } from "./FriendBrief";

/**
 * CmdId: 4065
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AskAddFriendNotify {
  TargetFriendBrief?: FriendBrief;
  TargetUid?: number;
}