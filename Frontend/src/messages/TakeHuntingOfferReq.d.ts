/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.d.ts";

/**
 * CmdId: 4326
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface TakeHuntingOfferReq {
  HuntingPair?: HuntingPair;
  CityId?: number;
}
