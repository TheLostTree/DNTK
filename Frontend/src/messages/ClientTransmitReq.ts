/* eslint-disable */
import type { TransmitReason } from "./TransmitReason.ts";
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 291
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ClientTransmitReq {
  SceneId?: number;
  Reason?: TransmitReason;
  Pos?: Vector;
  Rot?: Vector;
}
