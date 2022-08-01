/* eslint-disable */
import type { HuntingPair } from "./HuntingPair";

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
