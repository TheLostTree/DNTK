/* eslint-disable */
/**
 * CmdId: 881
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface UpdateAbilityCreatedMovingPlatformNotify {
  EntityId?: number;
  OpType?: UpdateAbilityCreatedMovingPlatformNotify_OpType;
}

export enum UpdateAbilityCreatedMovingPlatformNotify_OpType {
  OP_TYPE_NONE = 0,
  OP_TYPE_ACTIVATE = 1,
  OP_TYPE_DEACTIVATE = 2,
  UNRECOGNIZED = -1,
}
