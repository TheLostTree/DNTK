/* eslint-disable */
import type { InterOpType } from "./InterOpType";
import type { ItemParam } from "./ItemParam";
import type Long from "long";

/**
 * CmdId: 5229
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface MiracleRingDeliverItemReq {
  OpType?: InterOpType;
  ItemParamList?: ItemParam[];
  FoodWeaponGuidList?: Long[];
  GadgetId?: number;
  GadgetEntityId?: number;
}
