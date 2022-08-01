/* eslint-disable */
import type { AbilityInvokeEntry } from "./AbilityInvokeEntry";

/**
 * CmdId: 1175
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ClientAbilityChangeNotify {
  Unk2200FNAFDMAPLHP?: boolean;
  EntityId?: number;
  Invokes?: AbilityInvokeEntry[];
}
