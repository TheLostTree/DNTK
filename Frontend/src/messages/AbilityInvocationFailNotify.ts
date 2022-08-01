/* eslint-disable */
import type { AbilityInvokeEntry } from "./AbilityInvokeEntry.ts";

/**
 * CmdId: 1107
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AbilityInvocationFailNotify {
  Reason?: string;
  EntityId?: number;
  Invoke?: AbilityInvokeEntry;
}
