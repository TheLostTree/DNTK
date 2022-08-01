/* eslint-disable */
import type { Vector } from "./Vector";
import type { StoreType } from "./StoreType";
import type Long from "long";

/**
 * CmdId: 699
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DropItemReq {
  Pos?: Vector;
  StoreType?: StoreType;
  Count?: number;
  Guid?: Long;
}
