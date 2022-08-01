/* eslint-disable */
import type { AbilityScalarValueEntry } from "./AbilityScalarValueEntry";
import type { AbilityAppliedAbility } from "./AbilityAppliedAbility";
import type { AbilityAppliedModifier } from "./AbilityAppliedModifier";
import type { AbilityMixinRecoverInfo } from "./AbilityMixinRecoverInfo";

export interface AbilitySyncStateInfo {
  IsInited?: boolean;
  DynamicValueMap?: AbilityScalarValueEntry[];
  AppliedAbilities?: AbilityAppliedAbility[];
  AppliedModifiers?: AbilityAppliedModifier[];
  MixinRecoverInfos?: AbilityMixinRecoverInfo[];
  SgvDynamicValueMap?: AbilityScalarValueEntry[];
}
