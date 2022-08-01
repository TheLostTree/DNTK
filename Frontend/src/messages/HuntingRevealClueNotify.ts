/* eslint-disable */
import type { Vector } from "./Vector";
import type { HuntingPair } from "./HuntingPair";

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
