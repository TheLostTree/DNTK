/* eslint-disable */
import type { Vector } from "./Vector";

/**
 * CmdId: 5802
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface FishCastRodReq {
  BaitId?: number;
  RodId?: number;
  RodEntityId?: number;
  Pos?: Vector;
}
