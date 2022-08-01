/* eslint-disable */
import type { CombatInvokeEntry } from "./CombatInvokeEntry.ts";

/**
 * CmdId: 319
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface CombatInvocationsNotify {
  InvokeList?: CombatInvokeEntry[];
}
