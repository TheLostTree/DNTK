/* eslint-disable */
import type Long from "long";
import type { StoreType } from "./StoreType";

/**
 * CmdId: 631
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DropItemRsp {
  Retcode?: number;
  Guid?: Long;
  StoreType?: StoreType;
}
