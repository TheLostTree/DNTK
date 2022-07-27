/* eslint-disable */
import type { TowerFloorRecord } from "./TowerFloorRecord.d.ts";

/**
 * CmdId: 2498
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TowerFloorRecordChangeNotify {
  IsFinishedEntranceFloor?: boolean;
  TowerFloorRecordList?: TowerFloorRecord[];
}
