/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.ts";
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 4345
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HuntingOngoingNotify {
  HuntingPair?: HuntingPair;
  IsStarted?: boolean;
  NextPosition?: Vector;
  FinishClueCount?: number;
  IsFinal?: boolean;
  FailTime?: number;
}
