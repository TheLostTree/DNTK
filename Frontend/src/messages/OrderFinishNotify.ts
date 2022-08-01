/* eslint-disable */
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 4125
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface OrderFinishNotify {
  OrderId?: number;
  CardProductRemainDays?: number;
  ItemList?: ItemParam[];
  AddMcoin?: number;
  ProductId?: string;
}
