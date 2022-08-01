/* eslint-disable */
import type { ShopConcertProduct } from "./ShopConcertProduct";
import type { ShopGoods } from "./ShopGoods";
import type { ShopCardProduct } from "./ShopCardProduct";
import type { ShopMcoinProduct } from "./ShopMcoinProduct";

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
