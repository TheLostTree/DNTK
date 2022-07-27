/* eslint-disable */
import type { ForwardType } from "./ForwardType.d.ts";
import type { CombatTypeArgument } from "./CombatTypeArgument.d.ts";

export interface CombatInvokeEntry {
  CombatData?: Buffer;
  ForwardType?: ForwardType;
  ArgumentType?: CombatTypeArgument;
}
