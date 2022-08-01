/* eslint-disable */
import type { HuntingPair } from "./HuntingPair";
import type { HuntingOfferState } from "./HuntingOfferState";

export interface HuntingOfferData {
  HuntingPair?: HuntingPair;
  CityId?: number;
  State?: HuntingOfferState;
}
