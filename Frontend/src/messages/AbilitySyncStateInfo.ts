/* eslint-disable */
import type { AbilityScalarValueEntry } from "./AbilityScalarValueEntry.ts";
import type { AbilityAppliedAbility } from "./AbilityAppliedAbility.ts";
import type { AbilityAppliedModifier } from "./AbilityAppliedModifier.ts";
import type { AbilityMixinRecoverInfo } from "./AbilityMixinRecoverInfo.ts";

export interface AbilitySyncStateInfo {
  IsInited?: boolean;
  DynamicValueMap?: AbilityScalarValueEntry[];
  AppliedAbilities?: AbilityAppliedAbility[];
  AppliedModifiers?: AbilityAppliedModifier[];
  MixinRecoverInfos?: AbilityMixinRecoverInfo[];
  SgvDynamicValueMap?: AbilityScalarValueEntry[];
}
