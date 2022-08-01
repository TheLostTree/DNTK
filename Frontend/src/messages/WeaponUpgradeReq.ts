/* eslint-disable */
import type Long from "long";
import type { ItemParam } from "./ItemParam";

/**
 * CmdId: 639
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface WeaponUpgradeReq {
  FoodWeaponGuidList?: Long[];
  ItemParamList?: ItemParam[];
  TargetWeaponGuid?: Long;
}
