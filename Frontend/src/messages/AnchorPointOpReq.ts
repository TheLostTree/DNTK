/* eslint-disable */
/**
 * CmdId: 4257
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface AnchorPointOpReq {
  AnchorPointId?: number;
  AnchorPointOpType?: number;
}

export enum AnchorPointOpReq_AnchorPointOpType {
  ANCHOR_POINT_OP_TYPE_NONE = 0,
  ANCHOR_POINT_OP_TYPE_TELEPORT = 1,
  ANCHOR_POINT_OP_TYPE_REMOVE = 2,
  UNRECOGNIZED = -1,
}
