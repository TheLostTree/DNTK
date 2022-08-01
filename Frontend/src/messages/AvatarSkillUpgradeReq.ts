/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1075
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface AvatarSkillUpgradeReq {
  AvatarGuid?: Long;
  OldLevel?: number;
  AvatarSkillId?: number;
}
