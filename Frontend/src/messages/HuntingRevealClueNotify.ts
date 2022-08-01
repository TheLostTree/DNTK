/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { HuntingPair } from "./HuntingPair.ts";

/**
 * CmdId: 4322
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HuntingRevealClueNotify {
  FinishClueCount?: number;
  CluePosition?: Vector;
  HuntingPair?: HuntingPair;
  FinishedGroupId?: number;
}
