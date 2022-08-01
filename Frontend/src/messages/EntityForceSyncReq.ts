/* eslint-disable */
import type { MotionInfo } from "./MotionInfo.ts";

/**
 * CmdId: 274
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EntityForceSyncReq {
  RoomId?: number;
  MotionInfo?: MotionInfo;
  EntityId?: number;
  SceneTime?: number;
}
