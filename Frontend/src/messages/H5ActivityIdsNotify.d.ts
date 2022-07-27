/* eslint-disable */
/**
 * CmdId: 5675
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface H5ActivityIdsNotify {
  ClientRedDotTimestamp?: number;
  H5ActivityMap?: { [key: number]: number };
}

export interface H5ActivityIdsNotify_H5ActivityMapEntry {
  Key: number;
  Value: number;
}
