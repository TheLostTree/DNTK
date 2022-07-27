/* eslint-disable */
import type Long from "long";
import type { ItemParam } from "./ItemParam.d.ts";

/**
 * CmdId: 674
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface CombineRsp {
  CostItemList?: ItemParam[];
  Retcode?: number;
  TotalExtraItemList?: ItemParam[];
  CombineId?: number;
  TotalRandomItemList?: ItemParam[];
  ResultItemList?: ItemParam[];
  CombineCount?: number;
  TotalReturnItemList?: ItemParam[];
  AvatarGuid?: Long;
}
