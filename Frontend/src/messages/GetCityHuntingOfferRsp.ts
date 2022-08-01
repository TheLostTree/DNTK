/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.ts";
import type { HuntingOfferData } from "./HuntingOfferData.ts";

/**
 * CmdId: 4307
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetCityHuntingOfferRsp {
  Retcode?: number;
  HuntingOfferList?: HuntingOfferData[];
  CityId?: number;
  OngoingHuntingPair?: HuntingPair;
  CurWeekFinishedCount?: number;
  NextRefreshTime?: number;
}
