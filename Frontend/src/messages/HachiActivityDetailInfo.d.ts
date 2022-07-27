/* eslint-disable */
import type { HachiStageData } from "./HachiStageData.d.ts";

export interface HachiActivityDetailInfo {
  StageMap?: { [key: number]: HachiStageData };
}

export interface HachiActivityDetailInfo_StageMapEntry {
  Key: number;
  Value?: HachiStageData;
}
