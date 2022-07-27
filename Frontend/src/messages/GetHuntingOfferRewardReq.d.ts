/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.d.ts";

/**
 * CmdId: 4302
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface GetHuntingOfferRewardReq {
  CityId?: number;
  HuntingPair?: HuntingPair;
}
