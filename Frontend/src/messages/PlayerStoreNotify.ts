/* eslint-disable */
import type { StoreType } from "./StoreType";
import type { Item } from "./Item";

/**
 * CmdId: 672
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerStoreNotify {
  ItemList?: Item[];
  WeightLimit?: number;
  StoreType?: StoreType;
}
