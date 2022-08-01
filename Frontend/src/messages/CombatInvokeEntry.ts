/* eslint-disable */
import type { ForwardType } from "./ForwardType.ts";
import type { CombatTypeArgument } from "./CombatTypeArgument.ts";

export interface CombatInvokeEntry {
  CombatData?: Buffer;
  ForwardType?: ForwardType;
  ArgumentType?: CombatTypeArgument;
}
