/* eslint-disable */
import type { FishEscapeReason } from "./FishEscapeReason.ts";
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 5822
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FishEscapeNotify {
  Reason?: FishEscapeReason;
  Pos?: Vector;
  Uid?: number;
  FishIdList?: number[];
}
