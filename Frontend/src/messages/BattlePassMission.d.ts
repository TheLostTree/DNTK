/* eslint-disable */
export interface BattlePassMission {
  CurProgress?: number;
  MissionStatus?: BattlePassMission_MissionStatus;
  MissionId?: number;
  RewardBattlePassPoint?: number;
  MissionType?: number;
  TotalProgress?: number;
}

export enum BattlePassMission_MissionStatus {
  MISSION_STATUS_INVALID = 0,
  MISSION_STATUS_UNFINISHED = 1,
  MISSION_STATUS_FINISHED = 2,
  MISSION_STATUS_POINT_TAKEN = 3,
  UNRECOGNIZED = -1,
}
