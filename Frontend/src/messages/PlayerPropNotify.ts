/* eslint-disable */
import type { PropValue } from "./PropValue";

/**
 * CmdId: 175
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerPropNotify {
  PropMap?: { [key: number]: PropValue };
}

export interface PlayerPropNotify_PropMapEntry {
  Key: number;
  Value?: PropValue;
}
