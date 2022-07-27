/* eslint-disable */
import type { MotionInfo } from "./MotionInfo.d.ts";

/**
 * CmdId: 276
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface EntityForceSyncRsp {
  SceneTime?: number;
  EntityId?: number;
  FailMotion?: MotionInfo;
  Retcode?: number;
}
