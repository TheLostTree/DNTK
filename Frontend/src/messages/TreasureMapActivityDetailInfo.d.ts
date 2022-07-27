/* eslint-disable */
import type { TreasureMapRegionInfo } from "./TreasureMapRegionInfo.d.ts";
import type { TreasureMapBonusChallengeInfo } from "./TreasureMapBonusChallengeInfo.d.ts";

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
