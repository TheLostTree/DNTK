/* eslint-disable */
import type { AbilityString } from "./AbilityString.ts";
import type { AbilityAttachedModifier } from "./AbilityAttachedModifier.ts";
import type { ModifierDurability } from "./ModifierDurability.ts";

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
