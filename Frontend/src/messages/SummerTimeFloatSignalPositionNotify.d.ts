/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

/**
 * CmdId: 8077
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SummerTimeFloatSignalPositionNotify {
  Position?: Vector;
  IsTransferAnchor?: boolean;
  FloatSignalId?: number;
}
