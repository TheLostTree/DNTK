/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 634
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ItemCdGroupTimeNotify {
  ItemCdMap?: { [key: number]: Long };
}

export interface ItemCdGroupTimeNotify_ItemCdMapEntry {
  Key: number;
  Value: Long;
}
