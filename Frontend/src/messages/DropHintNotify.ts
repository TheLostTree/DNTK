/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 650
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DropHintNotify {
  Position?: Vector;
  ItemIdList?: number[];
}
