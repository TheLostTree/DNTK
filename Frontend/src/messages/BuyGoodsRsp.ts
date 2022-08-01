/* eslint-disable */
import type { ShopGoods } from "./ShopGoods.ts";

/**
 * CmdId: 735
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BuyGoodsRsp {
  BuyCount?: number;
  Goods?: ShopGoods;
  ShopType?: number;
  Retcode?: number;
  GoodsList?: ShopGoods[];
}
