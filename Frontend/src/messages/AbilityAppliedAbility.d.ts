/* eslint-disable */
import type { AbilityString } from "./AbilityString.d.ts";
import type { AbilityScalarValueEntry } from "./AbilityScalarValueEntry.d.ts";

export interface AbilityAppliedAbility {
  AbilityName?: AbilityString;
  AbilityOverride?: AbilityString;
  OverrideMap?: AbilityScalarValueEntry[];
  InstancedAbilityId?: number;
}
