/* eslint-disable */
import type { StoreType } from "./StoreType";
import type { Item } from "./Item";

/**
 * CmdId: 612
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface StoreItemChangeNotify {
  StoreType?: StoreType;
  ItemList?: Item[];
}
