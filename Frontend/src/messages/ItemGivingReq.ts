/* eslint-disable */
import type Long from "long";
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 140
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ItemGivingReq {
  ItemGuidCountMap?: { [key: Long]: number };
  GivingId?: number;
  ItemParamList?: ItemParam[];
  Unk2800PHNIJJMECGN?: ItemGivingReq_Unk2800LENCDFJACFN;
}

export enum ItemGivingReq_Unk2800LENCDFJACFN {
  Unk2800_LENCDFJACFN_QUEST = 0,
  Unk2800_LENCDFJACFN_Unk2800_HHHOPEHIPFG = 1,
  UNRECOGNIZED = -1,
}

export interface ItemGivingReq_ItemGuidCountMapEntry {
  Key: Long;
  Value: number;
}
