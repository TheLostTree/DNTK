/* eslint-disable */
import type { FriendBrief } from "./FriendBrief.ts";

/**
 * CmdId: 4026
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AddBlacklistRsp {
  TargetFriendBrief?: FriendBrief;
  Retcode?: number;
}
