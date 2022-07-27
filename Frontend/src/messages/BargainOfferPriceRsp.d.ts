/* eslint-disable */
import type { BargainResultType } from "./BargainResultType.d.ts";

/**
 * CmdId: 427
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BargainOfferPriceRsp {
  Retcode?: number;
  ResultParam?: number;
  BargainResult?: BargainResultType;
  CurMood?: number;
}
