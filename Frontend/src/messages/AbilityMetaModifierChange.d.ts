/* eslint-disable */
import type { AbilityAttachedModifier } from "./AbilityAttachedModifier.d.ts";
import type { ModifierAction } from "./ModifierAction.d.ts";
import type { AbilityString } from "./AbilityString.d.ts";
import type { ModifierProperty } from "./ModifierProperty.d.ts";

export interface AbilityMetaModifierChange {
  AttachedInstancedModifier?: AbilityAttachedModifier;
  ServerBuffUid?: number;
  IsAttachedParentAbility?: boolean;
  Action?: ModifierAction;
  ModifierLocalId?: number;
  ParentAbilityName?: AbilityString;
  IsMuteRemote?: boolean;
  ApplyEntityId?: number;
  Properties?: ModifierProperty[];
  ParentAbilityOverride?: AbilityString;
  Unk2700PMJMNCFJPDC?: boolean;
}
