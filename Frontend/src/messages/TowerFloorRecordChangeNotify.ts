/* eslint-disable */
import type { TowerFloorRecord } from "./TowerFloorRecord";

/**
 * CmdId: 2498
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TowerFloorRecordChangeNotify {
  IsFinishedEntranceFloor?: boolean;
  TowerFloorRecordList?: TowerFloorRecord[];
}
