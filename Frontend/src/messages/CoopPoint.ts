/* eslint-disable */
export interface CoopPoint {
  SelfConfidence?: number;
  State?: CoopPoint_State;
  Id?: number;
}

export enum CoopPoint_State {
  STATE_UNSTARTED = 0,
  STATE_STARTED = 1,
  STATE_FINISHED = 2,
  UNRECOGNIZED = -1,
}
