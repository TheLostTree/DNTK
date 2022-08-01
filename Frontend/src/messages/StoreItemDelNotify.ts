/* eslint-disable */
import type { StoreType } from "./StoreType";
import type Long from "long";

/**
 * CmdId: 635
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface StoreItemDelNotify {
  GuidList?: Long[];
  StoreType?: StoreType;
}
