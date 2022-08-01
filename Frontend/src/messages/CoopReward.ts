/* eslint-disable */
export interface CoopReward {
  Id?: number;
  State?: CoopReward_State;
}

export enum CoopReward_State {
  STATE_UNLOCK = 0,
  STATE_LOCK = 1,
  STATE_TAKEN = 2,
  UNRECOGNIZED = -1,
}
