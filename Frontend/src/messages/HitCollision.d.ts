/* eslint-disable */
import type { HitColliderType } from "./HitColliderType.d.ts";
import type { Vector } from "./Vector.d.ts";

export interface HitCollision {
  HitColliderType?: HitColliderType;
  HitPoint?: Vector;
  AttackeeHitForceAngle?: number;
  HitDir?: Vector;
  AttackeeHitEntityAngle?: number;
  HitBoxIndex?: number;
}
