/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 119
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AddRandTaskInfoNotify {
  RandTaskId?: number;
  Pos?: Vector;
}
