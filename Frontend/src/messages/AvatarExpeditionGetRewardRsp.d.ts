/* eslint-disable */
import type Long from "long";
import type { AvatarExpeditionInfo } from "./AvatarExpeditionInfo.d.ts";
import type { ItemParam } from "./ItemParam.d.ts";

/**
 * CmdId: 1784
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarExpeditionGetRewardRsp {
  Unk2700HBKHOBPGCLH?: ItemParam[];
  ItemList?: ItemParam[];
  ExpeditionInfoMap?: { [key: Long]: AvatarExpeditionInfo };
  Retcode?: number;
}

export interface AvatarExpeditionGetRewardRsp_ExpeditionInfoMapEntry {
  Key: Long;
  Value?: AvatarExpeditionInfo;
}
