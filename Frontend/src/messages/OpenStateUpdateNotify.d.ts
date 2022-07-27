/* eslint-disable */
/**
 * CmdId: 193
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface OpenStateUpdateNotify {
  OpenStateMap?: { [key: number]: number };
}

export interface OpenStateUpdateNotify_OpenStateMapEntry {
  Key: number;
  Value: number;
}
