/* eslint-disable */
import type Long from "long";
import type { ItemParam } from "./ItemParam";

/**
 * CmdId: 633
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface CalcWeaponUpgradeReturnItemsReq {
  FoodWeaponGuidList?: Long[];
  TargetWeaponGuid?: Long;
  ItemParamList?: ItemParam[];
}
