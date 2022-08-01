/* eslint-disable */
import type { AbilityString } from "./AbilityString.ts";
import type { AbilityScalarType } from "./AbilityScalarType.ts";

export interface AbilityScalarValueEntry {
  Key?: AbilityString;
  ValueType?: AbilityScalarType;
  FloatValue?: number | undefined;
  StringValue?: string | undefined;
  IntValue?: number | undefined;
  UintValue?: number | undefined;
}
