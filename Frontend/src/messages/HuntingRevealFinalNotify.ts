/* eslint-disable */
import type { HuntingPair } from "./HuntingPair.ts";
import type { Vector } from "./Vector.ts";

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
