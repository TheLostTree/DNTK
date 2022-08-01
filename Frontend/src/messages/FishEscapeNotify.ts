/* eslint-disable */
import type { FishEscapeReason } from "./FishEscapeReason";
import type { Vector } from "./Vector";

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
