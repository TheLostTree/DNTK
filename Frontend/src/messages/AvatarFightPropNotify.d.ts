/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1207
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarFightPropNotify {
  FightPropMap?: { [key: number]: number };
  AvatarGuid?: Long;
}

export interface AvatarFightPropNotify_FightPropMapEntry {
  Key: number;
  Value: number;
}
