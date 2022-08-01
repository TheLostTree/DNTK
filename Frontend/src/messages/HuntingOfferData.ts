/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.ts";
import type { HuntingOfferState } from "./HuntingOfferState.ts";

export interface HuntingOfferData {
  HuntingPair?: HuntingPair;
  CityId?: number;
  State?: HuntingOfferState;
}
