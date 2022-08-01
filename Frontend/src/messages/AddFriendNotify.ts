/* eslint-disable */
import type { FriendBrief } from "./FriendBrief";

/**
 * CmdId: 4022
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AddFriendNotify {
  TargetUid?: number;
  TargetFriendBrief?: FriendBrief;
}
