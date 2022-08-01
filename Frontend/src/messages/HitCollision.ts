/* eslint-disable */
import type { HitColliderType } from "./HitColliderType";
import type { Vector } from "./Vector";

export interface HitCollision {
  HitColliderType?: HitColliderType;
  HitPoint?: Vector;
  AttackeeHitForceAngle?: number;
  HitDir?: Vector;
  AttackeeHitEntityAngle?: number;
  HitBoxIndex?: number;
}
