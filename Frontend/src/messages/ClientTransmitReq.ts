/* eslint-disable */
import type { TransmitReason } from "./TransmitReason";
import type { Vector } from "./Vector";

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
