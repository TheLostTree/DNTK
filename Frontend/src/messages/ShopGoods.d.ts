/* eslint-disable */
import type { ItemParam } from "./ItemParam.d.ts";

export interface ShopGoods {
  DiscountEndTime?: number;
  MinLevel?: number;
  EndTime?: number;
  CostItemList?: ItemParam[];
  SecondarySheetId?: number;
  Hcoin?: number;
  Mcoin?: number;
  DiscountId?: number;
  SingleLimit?: number;
  GoodsId?: number;
  NextRefreshTime?: number;
  MaxLevel?: number;
  DisableType?: number;
  DiscountBeginTime?: number;
  PreGoodsIdList?: number[];
  BeginTime?: number;
  Scoin?: number;
  BoughtNum?: number;
  BuyLimit?: number;
  GoodsItem?: ItemParam;
}
