/* eslint-disable */
import type { AbilityInvokeEntry } from "./AbilityInvokeEntry.d.ts";

/**
 * CmdId: 1135
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ClientAbilityInitFinishNotify {
  Invokes?: AbilityInvokeEntry[];
  EntityId?: number;
}
