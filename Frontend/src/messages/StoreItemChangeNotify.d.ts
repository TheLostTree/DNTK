/* eslint-disable */
import type { StoreType } from "./StoreType.d.ts";
import type { Item } from "./Item.d.ts";

/**
 * CmdId: 612
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface StoreItemChangeNotify {
  StoreType?: StoreType;
  ItemList?: Item[];
}
