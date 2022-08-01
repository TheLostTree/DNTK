/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1231
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarPropNotify {
  PropMap?: { [key: number]: Long };
  AvatarGuid?: Long;
}

export interface AvatarPropNotify_PropMapEntry {
  Key: number;
  Value: Long;
}
