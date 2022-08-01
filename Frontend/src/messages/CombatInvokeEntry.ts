/* eslint-disable */
import type { ForwardType } from "./ForwardType";
import type { CombatTypeArgument } from "./CombatTypeArgument";

export interface CombatInvokeEntry {
  CombatData?: Buffer;
  ForwardType?: ForwardType;
  ArgumentType?: CombatTypeArgument;
}
