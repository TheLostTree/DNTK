/* eslint-disable */
import type { AbilityInvokeArgument } from "./AbilityInvokeArgument";
import type { AbilityInvokeEntryHead } from "./AbilityInvokeEntryHead";
import type { ForwardType } from "./ForwardType";

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
