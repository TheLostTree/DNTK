/* eslint-disable */
import type { ForgeQueueData } from "./ForgeQueueData";

/**
 * CmdId: 680
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ForgeDataNotify {
  ForgeIdList?: number[];
  ForgeQueueMap?: { [key: number]: ForgeQueueData };
  MaxQueueNum?: number;
}

export interface ForgeDataNotify_ForgeQueueMapEntry {
  Key: number;
  Value?: ForgeQueueData;
}
