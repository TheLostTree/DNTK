/* eslint-disable */
import type { HideAndSeekStageType } from "./HideAndSeekStageType";
import type { HideAndSeekPlayerBattleInfo } from "./HideAndSeekPlayerBattleInfo";

export interface HideAndSeekStageInfo {
  MapId?: number;
  IsRecordScore?: boolean;
  StageType?: HideAndSeekStageType;
  BattleInfoMap?: { [key: number]: HideAndSeekPlayerBattleInfo };
  HiderUidList?: number[];
  HunterUid?: number;
}

export interface HideAndSeekStageInfo_BattleInfoMapEntry {
  Key: number;
  Value?: HideAndSeekPlayerBattleInfo;
}
