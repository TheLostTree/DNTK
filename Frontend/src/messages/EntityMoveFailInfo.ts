/* eslint-disable */
import type { MotionInfo } from "./MotionInfo.ts";

export interface EntityMoveFailInfo {
  Retcode?: number;
  SceneTime?: number;
  FailMotion?: MotionInfo;
  ReliableSeq?: number;
  EntityId?: number;
}
