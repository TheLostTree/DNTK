/* eslint-disable */
import type { FriendBrief } from "./FriendBrief.ts";

/**
 * CmdId: 4066
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetPlayerAskFriendListRsp {
  Retcode?: number;
  AskFriendList?: FriendBrief[];
}
