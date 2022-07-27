/* eslint-disable */
import type { FleurFairPlayerStatInfo } from "./FleurFairPlayerStatInfo.d.ts";

export interface FleurFairBossSettleInfo {
  RewardTokenNum?: number;
  StatInfoList?: FleurFairPlayerStatInfo[];
  IsSuccess?: boolean;
  Energy?: number;
  CostTime?: number;
}
