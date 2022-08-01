/* eslint-disable */
import type { BlitzRushStage } from "./BlitzRushStage";
import type { ParkourLevelInfo } from "./ParkourLevelInfo";

export interface BlitzRushActivityDetailInfo {
  StageList?: BlitzRushStage[];
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  ParkourLevelInfoList?: ParkourLevelInfo[];
}
