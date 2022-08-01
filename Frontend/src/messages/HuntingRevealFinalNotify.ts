/* eslint-disable */
import type { HuntingPair } from "./HuntingPair";
import type { Vector } from "./Vector";

/**
 * CmdId: 4344
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HuntingRevealFinalNotify {
  FinishedGroupId?: number;
  HuntingPair?: HuntingPair;
  FinalPosition?: Vector;
}
