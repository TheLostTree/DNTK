/* eslint-disable */
export interface LockedPersonallineData {
  LockReason?: LockedPersonallineData_LockReason;
  PersonalLineId?: number;
  ChapterId?: number | undefined;
  Level?: number | undefined;
}

export enum LockedPersonallineData_LockReason {
  LOCK_REASON_LEVEL = 0,
  LOCK_REASON_QUEST = 1,
  UNRECOGNIZED = -1,
}
