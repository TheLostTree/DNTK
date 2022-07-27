/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.d.ts";
import type { HuntingOfferState } from "./HuntingOfferState.d.ts";

export interface HuntingOfferData {
  HuntingPair?: HuntingPair;
  CityId?: number;
  State?: HuntingOfferState;
}
