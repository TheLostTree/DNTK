/* eslint-disable */
import type { ShopConcertProduct } from "./ShopConcertProduct.d.ts";
import type { ShopGoods } from "./ShopGoods.d.ts";
import type { ShopCardProduct } from "./ShopCardProduct.d.ts";
import type { ShopMcoinProduct } from "./ShopMcoinProduct.d.ts";

export interface Shop {
  ConcertProductList?: ShopConcertProduct[];
  GoodsList?: ShopGoods[];
  CityReputationLevel?: number;
  CardProductList?: ShopCardProduct[];
  McoinProductList?: ShopMcoinProduct[];
  NextRefreshTime?: number;
  CityId?: number;
  ShopType?: number;
}
