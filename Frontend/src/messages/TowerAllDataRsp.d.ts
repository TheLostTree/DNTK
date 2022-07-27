/* eslint-disable */
import type { TowerMonthlyBrief } from "./TowerMonthlyBrief.d.ts";
import type { TowerCurLevelRecord } from "./TowerCurLevelRecord.d.ts";
import type { TowerFloorRecord } from "./TowerFloorRecord.d.ts";

/**
 * CmdId: 2473
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TowerAllDataRsp {
  TowerScheduleId?: number;
  DailyLevelIndex?: number;
  SkipFloorGrantedRewardItemMap?: { [key: number]: number };
  IsFirstInteract?: boolean;
  IsFinishedEntranceFloor?: boolean;
  TowerFloorRecordList?: TowerFloorRecord[];
  DailyFloorId?: number;
  CommemorativeRewardId?: number;
  LastScheduleMonthlyBrief?: TowerMonthlyBrief;
  NextScheduleChangeTime?: number;
  ValidTowerRecordNum?: number;
  SkipToFloorIndex?: number;
  FloorOpenTimeMap?: { [key: number]: number };
  CurLevelRecord?: TowerCurLevelRecord;
  Retcode?: number;
  ScheduleStartTime?: number;
  MonthlyBrief?: TowerMonthlyBrief;
}

export interface TowerAllDataRsp_SkipFloorGrantedRewardItemMapEntry {
  Key: number;
  Value: number;
}

export interface TowerAllDataRsp_FloorOpenTimeMapEntry {
  Key: number;
  Value: number;
}
