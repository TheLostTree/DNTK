/* eslint-disable */
import type { AttackHitEffectResult } from "./AttackHitEffectResult";
import type { Vector } from "./Vector";
import type { AbilityIdentifier } from "./AbilityIdentifier";
import type { HitCollision } from "./HitCollision";

export interface AttackResult {
  IsResistText?: boolean;
  Unk2700GBANCFEPPIM?: number;
  AmplifyReactionType?: number;
  EndureBreak?: number;
  ElementType?: number;
  ElementDurabilityAttenuation?: number;
  DefenseId?: number;
  AttackTimestampMs?: number;
  BulletFlyTimeMs?: number;
  IsCrit?: boolean;
  ElementAmplifyRate?: number;
  AttackCount?: number;
  CriticalRand?: number;
  HitPosType?: number;
  AnimEventId?: string;
  HitEffResult?: AttackHitEffectResult;
  DamageShield?: number;
  EndureDelta?: number;
  ResolvedDir?: Vector;
  Damage?: number;
  AddhurtReactionType?: number;
  HashedAnimEventId?: number;
  UseGadgetDamageAction?: boolean;
  HitRetreatAngleCompat?: number;
  AbilityIdentifier?: AbilityIdentifier;
  AttackerId?: number;
  MuteElementHurt?: boolean;
  TargetType?: number;
  HitCollision?: HitCollision;
  GadgetDamageActionIdx?: number;
}
