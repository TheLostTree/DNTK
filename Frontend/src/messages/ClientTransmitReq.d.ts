/* eslint-disable */
import type { TransmitReason } from "./TransmitReason.d.ts";
import type { Vector } from "./Vector.d.ts";

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
