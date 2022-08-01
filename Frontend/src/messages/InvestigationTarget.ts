/* eslint-disable */
export interface InvestigationTarget {
  QuestId?: number;
  State?: InvestigationTarget_State;
  Progress?: number;
  TotalProgress?: number;
  InvestigationId?: number;
}

export enum InvestigationTarget_State {
  STATE_INVALID = 0,
  STATE_IN_PROGRESS = 1,
  STATE_COMPLETE = 2,
  STATE_REWARD_TAKEN = 3,
  UNRECOGNIZED = -1,
}
