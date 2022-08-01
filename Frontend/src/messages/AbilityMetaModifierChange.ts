/* eslint-disable */
import type { AbilityAttachedModifier } from "./AbilityAttachedModifier";
import type { ModifierAction } from "./ModifierAction";
import type { AbilityString } from "./AbilityString";
import type { ModifierProperty } from "./ModifierProperty";

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
