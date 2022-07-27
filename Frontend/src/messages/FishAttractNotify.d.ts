/* eslint-disable */
import type { Vector } from "./Vector.d.ts";

/**
 * CmdId: 5837
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FishAttractNotify {
  FishIdList?: number[];
  Pos?: Vector;
  Uid?: number;
}
