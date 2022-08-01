/* eslint-disable */
import type { EffigyDailyInfo } from "./EffigyDailyInfo";

export interface EffigyActivityDetailInfo {
  CurScore?: number;
  DailyInfoList?: EffigyDailyInfo[];
  LastDifficultyId?: number;
  TakenRewardIndexList?: number[];
}
