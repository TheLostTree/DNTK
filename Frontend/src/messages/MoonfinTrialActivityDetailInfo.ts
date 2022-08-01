/* eslint-disable */
import type { MoonfinTrialLevelInfo } from "./MoonfinTrialLevelInfo.ts";

export interface MoonfinTrialActivityDetailInfo {
  LevelInfoMap?: { [key: number]: MoonfinTrialLevelInfo };
  SpecialFishCount?: number;
}

export interface MoonfinTrialActivityDetailInfo_LevelInfoMapEntry {
  Key: number;
  Value?: MoonfinTrialLevelInfo;
}
