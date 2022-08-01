/* eslint-disable */
import type { PropValue } from "./PropValue.ts";

/**
 * CmdId: 1272
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface EntityPropNotify {
  PropMap?: { [key: number]: PropValue };
  EntityId?: number;
}

export interface EntityPropNotify_PropMapEntry {
  Key: number;
  Value?: PropValue;
}
