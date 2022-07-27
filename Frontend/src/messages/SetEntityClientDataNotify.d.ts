/* eslint-disable */
import type { EntityClientData } from "./EntityClientData.d.ts";

/**
 * CmdId: 3146
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SetEntityClientDataNotify {
  EntityId?: number;
  EntityClientData?: EntityClientData;
}
