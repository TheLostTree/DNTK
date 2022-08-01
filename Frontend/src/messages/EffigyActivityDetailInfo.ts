/* eslint-disable */
import type { EffigyDailyInfo } from "./EffigyDailyInfo.ts";

export interface EffigyActivityDetailInfo {
  CurScore?: number;
  DailyInfoList?: EffigyDailyInfo[];
  LastDifficultyId?: number;
  TakenRewardIndexList?: number[];
}
