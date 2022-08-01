/* eslint-disable */
import type { ItemParam } from "./ItemParam";

/**
 * CmdId: 2657
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeAchievementRewardRsp {
  IdList?: number[];
  ItemList?: ItemParam[];
  Retcode?: number;
}
