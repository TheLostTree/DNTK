/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 2123
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SeaLampContributeItemReq {
  ActivityId?: number;
  ItemList?: ItemParam[];
}
