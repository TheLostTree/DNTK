/* eslint-disable */
import type { SummerTimeSprintBoatInfo } from "./SummerTimeSprintBoatInfo.ts";
import type { SummerTimeStageInfo } from "./SummerTimeStageInfo.ts";

export interface SummerTimeDetailInfo {
  StageMap?: { [key: number]: SummerTimeStageInfo };
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  SprintBoatInfo?: SummerTimeSprintBoatInfo;
}

export interface SummerTimeDetailInfo_StageMapEntry {
  Key: number;
  Value?: SummerTimeStageInfo;
}
