/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { HuntingPair } from "./HuntingPair.ts";

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
