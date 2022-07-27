/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

/**
 * CmdId: 202
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MarkEntityInMinMapNotify {
  Position?: Vector;
  MonsterId?: number;
  EntityId?: number;
}
