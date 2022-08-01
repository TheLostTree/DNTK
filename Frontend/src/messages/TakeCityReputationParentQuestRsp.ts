/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2803
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface TakeCityReputationParentQuestRsp {
  Retcode?: number;
  CityId?: number;
  ParentQuestList?: number[];
  ItemList?: ItemParam[];
}
