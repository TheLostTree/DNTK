/* eslint-disable */
import type { FriendBrief } from "./FriendBrief.ts";

/**
 * CmdId: 4050
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface GetRecentMpPlayerListRsp {
  Retcode?: number;
  RecentMpPlayerBriefList?: FriendBrief[];
}
