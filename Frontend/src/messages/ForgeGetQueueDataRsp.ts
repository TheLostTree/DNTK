/* eslint-disable */
import type { ForgeQueueData } from "./ForgeQueueData.ts";

/**
 * CmdId: 641
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ForgeGetQueueDataRsp {
  ForgeQueueMap?: { [key: number]: ForgeQueueData };
  Retcode?: number;
  MaxQueueNum?: number;
}

export interface ForgeGetQueueDataRsp_ForgeQueueMapEntry {
  Key: number;
  Value?: ForgeQueueData;
}
