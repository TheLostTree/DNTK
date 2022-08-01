/* eslint-disable */
import type { CompoundQueueData } from "./CompoundQueueData";

/**
 * CmdId: 146
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface CompoundDataNotify {
  UnlockCompoundList?: number[];
  CompoundQueDataList?: CompoundQueueData[];
}
