/* eslint-disable */
import type { ForgeQueueManipulateType } from "./ForgeQueueManipulateType.ts";
import type { ItemParam } from "./ItemParam.ts";

/**
 * CmdId: 656
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ForgeQueueManipulateRsp {
  ManipulateType?: ForgeQueueManipulateType;
  ExtraOutputItemList?: ItemParam[];
  ReturnItemList?: ItemParam[];
  Retcode?: number;
  OutputItemList?: ItemParam[];
}
