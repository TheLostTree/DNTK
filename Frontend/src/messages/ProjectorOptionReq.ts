/* eslint-disable */
/**
 * CmdId: 863
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ProjectorOptionReq {
  OpType?: number;
  EntityId?: number;
}

export enum ProjectorOptionReq_ProjectorOpType {
  PROJECTOR_OP_TYPE_NONE = 0,
  PROJECTOR_OP_TYPE_CREATE = 1,
  PROJECTOR_OP_TYPE_DESTROY = 2,
  UNRECOGNIZED = -1,
}
