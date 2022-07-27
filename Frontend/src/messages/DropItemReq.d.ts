/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { StoreType } from "./StoreType.d.ts";
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
