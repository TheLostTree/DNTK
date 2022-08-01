/* eslint-disable */
import type { PlayProduct } from "./PlayProduct.ts";
import type { ShopCardProduct } from "./ShopCardProduct.ts";
import type { ShopMcoinProduct } from "./ShopMcoinProduct.ts";
import type { ShopConcertProduct } from "./ShopConcertProduct.ts";

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
