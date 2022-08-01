/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 5226
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface UseMiracleRingReq {
  MiracleRingOpType?: number;
  Pos?: Vector;
  Rot?: Vector;
}

export enum UseMiracleRingReq_MiracleRingOpType {
  MIRACLE_RING_OP_TYPE_NONE = 0,
  MIRACLE_RING_OP_TYPE_PLACE = 1,
  MIRACLE_RING_OP_TYPE_RETRACT = 2,
  UNRECOGNIZED = -1,
}
