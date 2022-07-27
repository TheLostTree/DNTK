/* eslint-disable */
import type { AbilityScalarValueEntry } from "./AbilityScalarValueEntry.d.ts";
import type { AbilityAppliedAbility } from "./AbilityAppliedAbility.d.ts";
import type { AbilityAppliedModifier } from "./AbilityAppliedModifier.d.ts";
import type { AbilityMixinRecoverInfo } from "./AbilityMixinRecoverInfo.d.ts";

export interface AbilitySyncStateInfo {
  IsInited?: boolean;
  DynamicValueMap?: AbilityScalarValueEntry[];
  AppliedAbilities?: AbilityAppliedAbility[];
  AppliedModifiers?: AbilityAppliedModifier[];
  MixinRecoverInfos?: AbilityMixinRecoverInfo[];
  SgvDynamicValueMap?: AbilityScalarValueEntry[];
}
