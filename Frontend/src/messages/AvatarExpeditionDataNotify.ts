/* eslint-disable */
import type Long from "long";
import type { AvatarExpeditionInfo } from "./AvatarExpeditionInfo";

/**
 * CmdId: 1771
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarExpeditionDataNotify {
  ExpeditionInfoMap?: { [key: string]: AvatarExpeditionInfo };
}

export interface AvatarExpeditionDataNotify_ExpeditionInfoMapEntry {
  Key: Long;
  Value?: AvatarExpeditionInfo;
}
