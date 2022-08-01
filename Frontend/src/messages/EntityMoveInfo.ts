/* eslint-disable */
import type { MotionInfo } from "./MotionInfo";

export interface EntityMoveInfo {
  EntityId?: number;
  MotionInfo?: MotionInfo;
  SceneTime?: number;
  ReliableSeq?: number;
  IsReliable?: boolean;
}
