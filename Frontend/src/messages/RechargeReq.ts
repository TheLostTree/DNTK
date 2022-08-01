/* eslint-disable */
import type { PlayProduct } from "./PlayProduct";
import type { ShopCardProduct } from "./ShopCardProduct";
import type { ShopMcoinProduct } from "./ShopMcoinProduct";
import type { ShopConcertProduct } from "./ShopConcertProduct";

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
