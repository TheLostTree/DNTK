/* eslint-disable */
export interface Achievement {
  FinishTimestamp?: number;
  Status?: Achievement_Status;
  CurProgress?: number;
  Id?: number;
  TotalProgress?: number;
}

export enum Achievement_Status {
  STATUS_INVALID = 0,
  STATUS_UNFINISHED = 1,
  STATUS_FINISHED = 2,
  STATUS_REWARD_TAKEN = 3,
  UNRECOGNIZED = -1,
}
