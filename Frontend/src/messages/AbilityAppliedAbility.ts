/* eslint-disable */
import type { AbilityString } from "./AbilityString";
import type { AbilityScalarValueEntry } from "./AbilityScalarValueEntry";

export interface AbilityAppliedAbility {
  AbilityName?: AbilityString;
  AbilityOverride?: AbilityString;
  OverrideMap?: AbilityScalarValueEntry[];
  InstancedAbilityId?: number;
}
