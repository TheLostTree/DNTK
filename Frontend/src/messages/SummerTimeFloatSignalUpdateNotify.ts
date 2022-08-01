/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 8781
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SummerTimeFloatSignalUpdateNotify {
  IsTransferAnchor?: boolean;
  FloatSignalId?: number;
  Position?: Vector;
}
