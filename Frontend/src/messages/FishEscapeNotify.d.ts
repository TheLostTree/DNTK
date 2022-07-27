/* eslint-disable */
import type { FishEscapeReason } from "./FishEscapeReason.d.ts";
import type { Vector } from "./Vector.d.ts";

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
