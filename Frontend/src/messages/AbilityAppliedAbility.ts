/* eslint-disable */
import type { AbilityString } from "./AbilityString.ts";
import type { AbilityScalarValueEntry } from "./AbilityScalarValueEntry.ts";

export interface AbilityAppliedAbility {
  AbilityName?: AbilityString;
  AbilityOverride?: AbilityString;
  OverrideMap?: AbilityScalarValueEntry[];
  InstancedAbilityId?: number;
}
