/* eslint-disable */
import type { Vector } from "./Vector";

/**
 * CmdId: 222
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface EntityJumpNotify {
  JumpType?: EntityJumpNotify_Type;
  Rot?: Vector;
  Pos?: Vector;
  EntityId?: number;
}

export enum EntityJumpNotify_Type {
  TYPE_NULL = 0,
  TYPE_ACTIVE = 1,
  TYPE_PASSIVE = 2,
  UNRECOGNIZED = -1,
}
