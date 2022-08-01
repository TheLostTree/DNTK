/* eslint-disable */
import type Long from "long";
import type { ItemParam } from "./ItemParam";

/**
 * CmdId: 604
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ReliquaryUpgradeReq {
  ItemParamList?: ItemParam[];
  TargetReliquaryGuid?: Long;
  FoodReliquaryGuidList?: Long[];
}
