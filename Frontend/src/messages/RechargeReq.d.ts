/* eslint-disable */
import type { PlayProduct } from "./PlayProduct.d.ts";
import type { ShopCardProduct } from "./ShopCardProduct.d.ts";
import type { ShopMcoinProduct } from "./ShopMcoinProduct.d.ts";
import type { ShopConcertProduct } from "./ShopConcertProduct.d.ts";

/**
 * CmdId: 4126
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface RechargeReq {
  PlayProduct?: PlayProduct;
  CardProduct?: ShopCardProduct;
  McoinProduct?: ShopMcoinProduct;
  ConcertProduct?: ShopConcertProduct;
}
