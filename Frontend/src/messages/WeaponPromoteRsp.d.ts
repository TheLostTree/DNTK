/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 665
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WeaponPromoteRsp {
  TargetWeaponGuid?: Long;
  OldPromoteLevel?: number;
  CurPromoteLevel?: number;
  Retcode?: number;
}
