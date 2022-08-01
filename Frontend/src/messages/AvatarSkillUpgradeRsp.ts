/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1048
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarSkillUpgradeRsp {
  AvatarGuid?: Long;
  CurLevel?: number;
  AvatarSkillId?: number;
  OldLevel?: number;
  Retcode?: number;
}
