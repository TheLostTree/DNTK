/* eslint-disable */
import type Long from "long";
import type { AvatarFetterInfo } from "./AvatarFetterInfo";

/**
 * CmdId: 1782
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarFetterDataNotify {
  FetterInfoMap?: { [key: string]: AvatarFetterInfo };
}

export interface AvatarFetterDataNotify_FetterInfoMapEntry {
  Key: Long;
  Value?: AvatarFetterInfo;
}
