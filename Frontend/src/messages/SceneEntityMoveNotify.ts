/* eslint-disable */
import type { MotionInfo } from "./MotionInfo";

/**
 * CmdId: 275
 * EnetChannelId: 1
 * EnetIsReliable: true
 */
export interface SceneEntityMoveNotify {
  MotionInfo?: MotionInfo;
  EntityId?: number;
  SceneTime?: number;
  ReliableSeq?: number;
}
