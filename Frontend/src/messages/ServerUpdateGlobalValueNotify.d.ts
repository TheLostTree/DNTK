/* eslint-disable */
/**
 * CmdId: 1148
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ServerUpdateGlobalValueNotify {
  EntityId?: number;
  UpdateType?: ServerUpdateGlobalValueNotify_UpdateType;
  Delta?: number;
  KeyHash?: number;
  Value?: number;
}

export enum ServerUpdateGlobalValueNotify_UpdateType {
  UPDATE_TYPE_INVALUE = 0,
  UPDATE_TYPE_ADD = 1,
  UPDATE_TYPE_SET = 2,
  UNRECOGNIZED = -1,
}
