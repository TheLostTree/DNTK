/* eslint-disable */
import type { MotionInfo } from "./MotionInfo.d.ts";

export interface EntityMoveFailInfo {
  Retcode?: number;
  SceneTime?: number;
  FailMotion?: MotionInfo;
  ReliableSeq?: number;
  EntityId?: number;
}
