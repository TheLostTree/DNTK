/* eslint-disable */
import type { TowerLevelRecord } from "./TowerLevelRecord.d.ts";

export interface TowerFloorRecord {
  FloorStarRewardProgress?: number;
  PassedLevelMap?: { [key: number]: number };
  FloorId?: number;
  PassedLevelRecordList?: TowerLevelRecord[];
}

export interface TowerFloorRecord_PassedLevelMapEntry {
  Key: number;
  Value: number;
}
