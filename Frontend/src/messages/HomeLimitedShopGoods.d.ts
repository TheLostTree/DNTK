/* eslint-disable */
import type { ItemParam } from "./ItemParam.d.ts";

export interface HomeLimitedShopGoods {
  BuyLimit?: number;
  CostItemList?: ItemParam[];
  BoughtNum?: number;
  GoodsItem?: ItemParam;
  GoodsId?: number;
  DisableType?: number;
}
