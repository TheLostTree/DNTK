/* eslint-disable */
import type { ProductPriceTier } from "./ProductPriceTier";

/**
 * CmdId: 4102
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerRechargeDataNotify {
  CardProductRemainDays?: number;
  ProductPriceTierList?: ProductPriceTier[];
}
