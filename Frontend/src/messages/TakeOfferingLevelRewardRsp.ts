/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2911
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeOfferingLevelRewardRsp {
  OfferingId?: number;
  TakeLevel?: number;
  Retcode?: number;
  ItemList?: ItemParam[];
}
