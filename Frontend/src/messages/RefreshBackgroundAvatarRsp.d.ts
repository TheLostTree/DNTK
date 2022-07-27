/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1800
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface RefreshBackgroundAvatarRsp {
  HpFullTimeMap?: { [key: Long]: number };
  Retcode?: number;
}

export interface RefreshBackgroundAvatarRsp_HpFullTimeMapEntry {
  Key: Long;
  Value: number;
}
