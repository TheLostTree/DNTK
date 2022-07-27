/* eslint-disable */
export interface Investigation {
  TotalProgress?: number;
  State?: Investigation_State;
  Progress?: number;
  Id?: number;
}

export enum Investigation_State {
  STATE_INVALID = 0,
  STATE_IN_PROGRESS = 1,
  STATE_COMPLETE = 2,
  STATE_REWARD_TAKEN = 3,
  UNRECOGNIZED = -1,
}
