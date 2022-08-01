/* eslint-disable */
import type { StoreType } from "./StoreType.ts";
import type { Item } from "./Item.ts";

/**
 * CmdId: 612
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface StoreItemChangeNotify {
  StoreType?: StoreType;
  ItemList?: Item[];
}
