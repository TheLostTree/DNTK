/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 2199
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SeaLampFlyLampReq {
  ItemId?: number;
  Param?: number;
  Pos?: Vector;
  ItemNum?: number;
}
