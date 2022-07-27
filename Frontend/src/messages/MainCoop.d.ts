/* eslint-disable */
export interface MainCoop {
  SeenEndingMap?: { [key: number]: number };
  NormalVarMap?: { [key: number]: number };
  SelfConfidence?: number;
  SavePointIdList?: number[];
  Status?: MainCoop_Status;
  TempVarMap?: { [key: number]: number };
  Id?: number;
}

export enum MainCoop_Status {
  STATUS_INVALID = 0,
  STATUS_RUNNING = 1,
  STATUS_FINISHED = 2,
  UNRECOGNIZED = -1,
}

export interface MainCoop_SeenEndingMapEntry {
  Key: number;
  Value: number;
}

export interface MainCoop_NormalVarMapEntry {
  Key: number;
  Value: number;
}

export interface MainCoop_TempVarMapEntry {
  Key: number;
  Value: number;
}
