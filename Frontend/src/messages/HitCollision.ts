/* eslint-disable */
import type { HitColliderType } from "./HitColliderType.ts";
import type { Vector } from "./Vector.ts";

export interface HitCollision {
  HitColliderType?: HitColliderType;
  HitPoint?: Vector;
  AttackeeHitForceAngle?: number;
  HitDir?: Vector;
  AttackeeHitEntityAngle?: number;
  HitBoxIndex?: number;
}
