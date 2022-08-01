/* eslint-disable */
import type { Vector } from "./Vector";

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
