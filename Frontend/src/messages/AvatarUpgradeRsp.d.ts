/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1701
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarUpgradeRsp {
  CurLevel?: number;
  OldLevel?: number;
  OldFightPropMap?: { [key: number]: number };
  Retcode?: number;
  CurFightPropMap?: { [key: number]: number };
  AvatarGuid?: Long;
}

export interface AvatarUpgradeRsp_OldFightPropMapEntry {
  Key: number;
  Value: number;
}

export interface AvatarUpgradeRsp_CurFightPropMapEntry {
  Key: number;
  Value: number;
}
