/* eslint-disable */
import type { BlessingFriendPicData } from "./BlessingFriendPicData.ts";

/**
 * CmdId: 2056
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BlessingGetFriendPicListRsp {
  Retcode?: number;
  FriendPicDataList?: BlessingFriendPicData[];
}
