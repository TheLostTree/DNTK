/* eslint-disable */
import type { AbilityInvokeArgument } from "./AbilityInvokeArgument.d.ts";
import type { AbilityInvokeEntryHead } from "./AbilityInvokeEntryHead.d.ts";
import type { ForwardType } from "./ForwardType.d.ts";

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
