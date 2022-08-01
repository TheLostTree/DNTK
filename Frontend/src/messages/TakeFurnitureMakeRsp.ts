/* eslint-disable */
import type { FurnitureMakeSlot } from "./FurnitureMakeSlot";
import type { ItemParam } from "./ItemParam";

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
