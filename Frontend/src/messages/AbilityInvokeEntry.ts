/* eslint-disable */
import type { AbilityInvokeArgument } from "./AbilityInvokeArgument.ts";
import type { AbilityInvokeEntryHead } from "./AbilityInvokeEntryHead.ts";
import type { ForwardType } from "./ForwardType.ts";

export interface AbilityInvokeEntry {
  ArgumentType?: AbilityInvokeArgument;
  Head?: AbilityInvokeEntryHead;
  ForwardPeer?: number;
  EventId?: number;
  ForwardType?: ForwardType;
  AbilityData?: Buffer;
  TotalTickTime?: number;
  EntityId?: number;
}
