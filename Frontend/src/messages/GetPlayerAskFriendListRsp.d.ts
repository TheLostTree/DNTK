/* eslint-disable */
import type { FriendBrief } from "./FriendBrief.d.ts";

/**
 * CmdId: 4066
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetPlayerAskFriendListRsp {
  Retcode?: number;
  AskFriendList?: FriendBrief[];
}
