/* eslint-disable */
import type { FriendBrief } from "./FriendBrief.ts";

/**
 * CmdId: 4098
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface GetPlayerFriendListRsp {
  Retcode?: number;
  AskFriendList?: FriendBrief[];
  FriendList?: FriendBrief[];
}
