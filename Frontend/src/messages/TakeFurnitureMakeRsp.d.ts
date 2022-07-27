/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot.d.ts";
import type { ItemParam } from "./ItemParam.d.ts";

/**
 * CmdId: 4769
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TakeFurnitureMakeRsp {
  FurnitureMakeSlot?: FurnitureMakeSlot;
  ReturnItemList?: ItemParam[];
  MakeId?: number;
  Retcode?: number;
  OutputItemList?: ItemParam[];
}
