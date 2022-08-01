/* eslint-disable */
import type { AbilityString } from "./AbilityString";
import type { AbilityAttachedModifier } from "./AbilityAttachedModifier";
import type { ModifierDurability } from "./ModifierDurability";

export interface AbilityAppliedModifier {
  ModifierLocalId?: number;
  ParentAbilityEntityId?: number;
  ParentAbilityName?: AbilityString;
  ParentAbilityOverride?: AbilityString;
  InstancedAbilityId?: number;
  InstancedModifierId?: number;
  ExistDuration?: number;
  AttachedInstancedModifier?: AbilityAttachedModifier;
  ApplyEntityId?: number;
  IsAttachedParentAbility?: boolean;
  ModifierDurability?: ModifierDurability;
  SbuffUid?: number;
  IsServerbuffModifier?: boolean;
}
