/* eslint-disable */
import type Long from "long";
import type { ItemParam } from "./ItemParam.d.ts";

/**
 * CmdId: 653
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WeaponUpgradeRsp {
  CurLevel?: number;
  Retcode?: number;
  OldLevel?: number;
  ItemParamList?: ItemParam[];
  TargetWeaponGuid?: Long;
}
