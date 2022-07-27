/* eslint-disable */
import type { FriendBrief } from "./FriendBrief.d.ts";

/**
 * CmdId: 4091
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetPlayerBlacklistRsp {
  Retcode?: number;
  Blacklist?: FriendBrief[];
}
