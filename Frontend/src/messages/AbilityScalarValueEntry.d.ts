/* eslint-disable */
import type { AbilityString } from "./AbilityString.d.ts";
import type { AbilityScalarType } from "./AbilityScalarType.d.ts";

export interface AbilityScalarValueEntry {
  Key?: AbilityString;
  ValueType?: AbilityScalarType;
  FloatValue?: number | undefined;
  StringValue?: string | undefined;
  IntValue?: number | undefined;
  UintValue?: number | undefined;
}
