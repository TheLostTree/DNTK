/* eslint-disable */
export interface FallPlayerInfo {
  TimeCost?: number;
  Uid?: number;
  BallCatchCountMap?: { [key: number]: number };
  CurScore?: number;
  IsGround?: boolean;
}

export interface FallPlayerInfo_BallCatchCountMapEntry {
  Key: number;
  Value: number;
}
