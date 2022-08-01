/* eslint-disable */
import type Long from "long";
import type { PropValue } from "./PropValue";

/**
 * CmdId: 190
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerDataNotify {
  ServerTime?: Long;
  NickName?: string;
  IsFirstLoginToday?: boolean;
  RegionId?: number;
  PropMap?: { [key: number]: PropValue };
}

export interface PlayerDataNotify_PropMapEntry {
  Key: number;
  Value?: PropValue;
}
