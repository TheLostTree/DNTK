/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2614
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BattlePassBuySuccNotify {
  ScheduleId?: number;
  ProductPlayType?: number;
  AddPoint?: number;
  ItemList?: ItemParam[];
}
