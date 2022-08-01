/* eslint-disable */
import type { ItemParam } from "./ItemParam";

/**
 * CmdId: 2109
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ActivityTakeWatcherRewardBatchRsp {
  WatcherIdList?: number[];
  Retcode?: number;
  ActivityId?: number;
  ItemList?: ItemParam[];
}
