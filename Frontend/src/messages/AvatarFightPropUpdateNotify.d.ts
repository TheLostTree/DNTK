/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1221
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarFightPropUpdateNotify {
  FightPropMap?: { [key: number]: number };
  AvatarGuid?: Long;
}

export interface AvatarFightPropUpdateNotify_FightPropMapEntry {
  Key: number;
  Value: number;
}
