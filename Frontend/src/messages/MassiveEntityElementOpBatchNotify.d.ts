/* eslint-disable */
import type { ShapeSphere } from "./ShapeSphere.d.ts";
import type { ShapeBox } from "./ShapeBox.d.ts";

/**
 * CmdId: 357
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface MassiveEntityElementOpBatchNotify {
  EntityType?: number;
  OpIdx?: number;
  UserId?: number;
  AttackerId?: number;
  SourceElementType?: number;
  ReactionSourceType?: number;
  AttackElementDurability?: number;
  ShapeSphere?: ShapeSphere | undefined;
  ShapeBox?: ShapeBox | undefined;
}
