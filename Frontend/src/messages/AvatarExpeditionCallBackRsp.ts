/* eslint-disable */
import type Long from "long";
import type { AvatarExpeditionInfo } from "./AvatarExpeditionInfo";

/**
 * CmdId: 1726
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarExpeditionCallBackRsp {
  ExpeditionInfoMap?: { [key: string]: AvatarExpeditionInfo };
  Retcode?: number;
}

export interface AvatarExpeditionCallBackRsp_ExpeditionInfoMapEntry {
  Key: Long;
  Value?: AvatarExpeditionInfo;
}
