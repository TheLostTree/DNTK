/* eslint-disable */
import type { AbilityAttachedModifier } from "./AbilityAttachedModifier.ts";
import type { ModifierAction } from "./ModifierAction.ts";
import type { AbilityString } from "./AbilityString.ts";
import type { ModifierProperty } from "./ModifierProperty.ts";

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
