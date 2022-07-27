/* eslint-disable */
import type Long from "long";
import type { ItemParam } from "./ItemParam.d.ts";

/**
 * CmdId: 684
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface CalcWeaponUpgradeReturnItemsRsp {
  ItemParamList?: ItemParam[];
  Retcode?: number;
  TargetWeaponGuid?: Long;
}
