/* eslint-disable */
import type Long from "long";
import type { AvatarExpeditionInfo } from "./AvatarExpeditionInfo.ts";

/**
 * CmdId: 1648
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarExpeditionAllDataRsp {
  OpenExpeditionList?: number[];
  Retcode?: number;
  ExpeditionCountLimit?: number;
  ExpeditionInfoMap?: { [key: Long]: AvatarExpeditionInfo };
}

export interface AvatarExpeditionAllDataRsp_ExpeditionInfoMapEntry {
  Key: Long;
  Value?: AvatarExpeditionInfo;
}
