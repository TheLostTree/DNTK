/* eslint-disable */
import type { HuntingPair } from "./HuntingPair";

/**
 * CmdId: 4318
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeHuntingOfferRsp {
  HuntingPair?: HuntingPair;
  CityId?: number;
  Retcode?: number;
}