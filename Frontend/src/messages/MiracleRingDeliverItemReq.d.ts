/* eslint-disable */
import type { InterOpType } from "./InterOpType.d.ts";
import type { ItemParam } from "./ItemParam.d.ts";
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
