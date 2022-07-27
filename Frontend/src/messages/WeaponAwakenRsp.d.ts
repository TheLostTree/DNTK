/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 606
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WeaponAwakenRsp {
  Retcode?: number;
  AvatarGuid?: Long;
  OldAffixLevelMap?: { [key: number]: number };
  TargetWeaponAwakenLevel?: number;
  TargetWeaponGuid?: Long;
  CurAffixLevelMap?: { [key: number]: number };
}

export interface WeaponAwakenRsp_OldAffixLevelMapEntry {
  Key: number;
  Value: number;
}

export interface WeaponAwakenRsp_CurAffixLevelMapEntry {
  Key: number;
  Value: number;
}
