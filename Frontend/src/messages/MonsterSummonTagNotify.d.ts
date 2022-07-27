/* eslint-disable */
/**
 * CmdId: 1372
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MonsterSummonTagNotify {
  SummonTagMap?: { [key: number]: number };
  MonsterEntityId?: number;
}

export interface MonsterSummonTagNotify_SummonTagMapEntry {
  Key: number;
  Value: number;
}
