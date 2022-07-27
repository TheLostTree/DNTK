/* eslint-disable */
/**
 * CmdId: 127
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface OpenStateChangeNotify {
  OpenStateMap?: { [key: number]: number };
}

export interface OpenStateChangeNotify_OpenStateMapEntry {
  Key: number;
  Value: number;
}
