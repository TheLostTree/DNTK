/* eslint-disable */
import type { StoreType } from "./StoreType.ts";

/**
 * CmdId: 698
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface StoreWeightLimitNotify {
  WeaponCountLimit?: number;
  StoreType?: StoreType;
  MaterialCountLimit?: number;
  ReliquaryCountLimit?: number;
  FurnitureCountLimit?: number;
  WeightLimit?: number;
}
