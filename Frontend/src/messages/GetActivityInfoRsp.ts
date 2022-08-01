/* eslint-disable */
import type { ActivityInfo } from "./ActivityInfo.ts";
import type { Uint32Pair } from "./Uint32Pair.ts";

/**
 * CmdId: 2041
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetActivityInfoRsp {
  Retcode?: number;
  ActivityInfoList?: ActivityInfo[];
  ActivatedSaleIdList?: number[];
  DisableTransferPointInteractionList?: Uint32Pair[];
}
