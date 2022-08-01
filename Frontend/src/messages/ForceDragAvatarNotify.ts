/* eslint-disable */
import type Long from "long";
import type { MotionInfo } from "./MotionInfo";

/**
 * CmdId: 3235
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ForceDragAvatarNotify {
  SceneTime?: number;
  DeltaTimeMs?: Long;
  EntityId?: number;
  MotionInfo?: MotionInfo;
  IsFirstValid?: boolean;
  LastMoveTimeMs?: Long;
}
