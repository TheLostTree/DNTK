/* eslint-disable */
import type { ShopConcertProduct } from "./ShopConcertProduct.ts";
import type { ShopGoods } from "./ShopGoods.ts";
import type { ShopCardProduct } from "./ShopCardProduct.ts";
import type { ShopMcoinProduct } from "./ShopMcoinProduct.ts";

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
