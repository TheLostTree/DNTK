/* eslint-disable */
import type { Vector } from "./Vector";
import type { HuntingPair } from "./HuntingPair";

/**
 * CmdId: 4329
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HuntingStartNotify {
  CluePosition?: Vector;
  FailTime?: number;
  HuntingPair?: HuntingPair;
  IsFinal?: boolean;
}
