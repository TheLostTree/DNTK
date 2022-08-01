/* eslint-disable */
import type { BlitzRushStage } from "./BlitzRushStage.ts";
import type { ParkourLevelInfo } from "./ParkourLevelInfo.ts";

export interface BlitzRushActivityDetailInfo {
  StageList?: BlitzRushStage[];
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  ParkourLevelInfoList?: ParkourLevelInfo[];
}
