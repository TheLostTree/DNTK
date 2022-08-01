/* eslint-disable */
import type { TreasureMapRegionInfo } from "./TreasureMapRegionInfo";
import type { TreasureMapBonusChallengeInfo } from "./TreasureMapBonusChallengeInfo";

export interface TreasureMapActivityDetailInfo {
  ActiveRegionIndex?: number;
  RegionInfoList?: TreasureMapRegionInfo[];
  IsMpChallengeTouched?: boolean;
  TreasureCloseTime?: number;
  BonusChallengeList?: TreasureMapBonusChallengeInfo[];
  CurrencyNum?: number;
  PreviewRewardId?: number;
  MinOpenPlayerLevel?: number;
  TotalMpSpotNum?: number;
}
