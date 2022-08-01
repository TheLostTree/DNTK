/* eslint-disable */
import type { CompoundQueueData } from "./CompoundQueueData";

/**
 * CmdId: 149
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetCompoundDataRsp {
  Retcode?: number;
  UnlockCompoundList?: number[];
  CompoundQueDataList?: CompoundQueueData[];
}
