/* eslint-disable */
import type { CoopCg } from "./CoopCg";
import type { CoopPoint } from "./CoopPoint";
import type { CoopReward } from "./CoopReward";

export interface CoopChapter {
  CoopCgList?: CoopCg[];
  Id?: number;
  CoopPointList?: CoopPoint[];
  FinishDialogList?: number[];
  FinishedEndCount?: number;
  TotalEndCount?: number;
  CoopRewardList?: CoopReward[];
  LockReasonList?: number[];
  State?: CoopChapter_State;
  SeenEndingMap?: { [key: number]: number };
}

export enum CoopChapter_State {
  STATE_CLOSE = 0,
  STATE_COND_NOT_MEET = 1,
  STATE_COND_MEET = 2,
  STATE_ACCEPT = 3,
  UNRECOGNIZED = -1,
}

export interface CoopChapter_SeenEndingMapEntry {
  Key: number;
  Value: number;
}
