/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 3019
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface HitTreeNotify {
  TreeType?: number;
  TreePos?: Vector;
  DropPos?: Vector;
}
