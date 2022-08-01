/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 695
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface WeaponAwakenReq {
  ItemGuid?: Long;
  AffixLevelMap?: { [key: number]: number };
  TargetWeaponGuid?: Long;
}

export interface WeaponAwakenReq_AffixLevelMapEntry {
  Key: number;
  Value: number;
}
