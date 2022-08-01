/* eslint-disable */
import type { SumoStageData } from "./SumoStageData";

export interface SumoActivityDetailInfo {
  DifficultyId?: number;
  SumoStageMap?: { [key: number]: SumoStageData };
  Unk2700NIJIAJMFLLD?: number;
}

export interface SumoActivityDetailInfo_SumoStageMapEntry {
  Key: number;
  Value?: SumoStageData;
}
