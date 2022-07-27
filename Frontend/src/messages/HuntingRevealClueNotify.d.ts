/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { HuntingPair } from "./HuntingPair.d.ts";

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
