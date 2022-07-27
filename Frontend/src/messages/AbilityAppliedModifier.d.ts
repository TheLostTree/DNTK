/* eslint-disable */
import type { AbilityString } from "./AbilityString.d.ts";
import type { AbilityAttachedModifier } from "./AbilityAttachedModifier.d.ts";
import type { ModifierDurability } from "./ModifierDurability.d.ts";

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
