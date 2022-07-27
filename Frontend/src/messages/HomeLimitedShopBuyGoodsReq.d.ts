/* eslint-disable */
import type { HomeLimitedShopGoods } from "./HomeLimitedShopGoods.d.ts";

/**
 * CmdId: 4760
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface HomeLimitedShopBuyGoodsReq {
  Goods?: HomeLimitedShopGoods;
  BuyCount?: number;
}
