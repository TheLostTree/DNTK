/* eslint-disable */
import type { BlitzRushStage } from "./BlitzRushStage.d.ts";
import type { ParkourLevelInfo } from "./ParkourLevelInfo.d.ts";

export interface BlitzRushActivityDetailInfo {
  StageList?: BlitzRushStage[];
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  ParkourLevelInfoList?: ParkourLevelInfo[];
}
