/* eslint-disable */
import type { MotionInfo } from "./MotionInfo";

/**
 * CmdId: 290
 * EnetChannelId: 1
 * EnetIsReliable: false
 * IsAllowClient: true
 */
export interface SceneEntityMoveReq {
  MotionInfo?: MotionInfo;
  SceneTime?: number;
  EntityId?: number;
  ReliableSeq?: number;
}
