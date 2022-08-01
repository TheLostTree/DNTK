/* eslint-disable */
import type { MotionInfo } from "./MotionInfo";

/**
 * CmdId: 273
 * EnetChannelId: 1
 * EnetIsReliable: true
 */
export interface SceneEntityMoveRsp {
  EntityId?: number;
  FailMotion?: MotionInfo;
  SceneTime?: number;
  ReliableSeq?: number;
  Retcode?: number;
}
