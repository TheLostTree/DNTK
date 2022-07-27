/* eslint-disable */
import type { HideAndSeekStageType } from "./HideAndSeekStageType.d.ts";
import type { HideAndSeekPlayerBattleInfo } from "./HideAndSeekPlayerBattleInfo.d.ts";

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
