/* eslint-disable */
import type Long from "long";
import type { AvatarExpeditionInfo } from "./AvatarExpeditionInfo.d.ts";

/**
 * CmdId: 1771
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarExpeditionDataNotify {
  ExpeditionInfoMap?: { [key: Long]: AvatarExpeditionInfo };
}

export interface AvatarExpeditionDataNotify_ExpeditionInfoMapEntry {
  Key: Long;
  Value?: AvatarExpeditionInfo;
}
