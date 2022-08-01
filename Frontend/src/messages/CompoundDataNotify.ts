/* eslint-disable */
import type { CompoundQueueData } from "./CompoundQueueData.ts";

/**
 * CmdId: 146
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface CompoundDataNotify {
  UnlockCompoundList?: number[];
  CompoundQueDataList?: CompoundQueueData[];
}
