/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2881
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeCityReputationExploreRewardRsp {
  ExploreIdList?: number[];
  ItemList?: ItemParam[];
  Retcode?: number;
  CityId?: number;
}
