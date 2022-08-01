/* eslint-disable */
import type { Shop } from "./Shop.ts";

/**
 * CmdId: 798
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetShopRsp {
  Shop?: Shop;
  Retcode?: number;
}
