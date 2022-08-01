/* eslint-disable */
import type { FoundationOpType } from "./FoundationOpType.ts";

/**
 * CmdId: 805
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface FoundationReq {
  GadgetEntityId?: number;
  PointConfigId?: number;
  BuildingId?: number;
  OpType?: FoundationOpType;
}
