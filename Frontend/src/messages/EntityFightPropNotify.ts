/* eslint-disable */
/**
 * CmdId: 1212
 * EnetChannelId: 0
 * EnetIsReliable: false
 * IsAllowClient: true
 */
export interface EntityFightPropNotify {
  EntityId?: number;
  FightPropMap?: { [key: number]: number };
}

export interface EntityFightPropNotify_FightPropMapEntry {
  Key: number;
  Value: number;
}
