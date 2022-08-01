/* eslint-disable */
import type { ForgeQueueData } from "./ForgeQueueData";

/**
 * CmdId: 676
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ForgeQueueDataNotify {
  ForgeQueueMap?: { [key: number]: ForgeQueueData };
  RemovedForgeQueueList?: number[];
}

export interface ForgeQueueDataNotify_ForgeQueueMapEntry {
  Key: number;
  Value?: ForgeQueueData;
}
