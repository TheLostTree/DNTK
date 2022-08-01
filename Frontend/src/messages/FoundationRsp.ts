/* eslint-disable */
import type { FoundationOpType } from "./FoundationOpType";

/**
 * CmdId: 882
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FoundationRsp {
  OpType?: FoundationOpType;
  GadgetEntityId?: number;
  BuildingId?: number;
  PointConfigId?: number;
  Retcode?: number;
}
