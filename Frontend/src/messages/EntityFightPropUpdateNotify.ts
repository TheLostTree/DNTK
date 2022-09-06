/* eslint-disable */
/**
 * CmdId: 1235
 * EnetChannelId: 0
 * EnetIsReliable: false
 * IsAllowClient: true
 */
export interface EntityFightPropUpdateNotify {
  FightPropMap?: { [key: number]: number };
  EntityId?: number;
}

export interface EntityFightPropUpdateNotify_FightPropMapEntry {
  Key: number;
  Value: number;
}
