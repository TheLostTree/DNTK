/* eslint-disable */
import type { AbilityString } from "./AbilityString";
import type { AbilityScalarType } from "./AbilityScalarType";

export interface AbilityScalarValueEntry {
  Key?: AbilityString;
  ValueType?: AbilityScalarType;
  FloatValue?: number | undefined;
  StringValue?: string | undefined;
  IntValue?: number | undefined;
  UintValue?: number | undefined;
}
