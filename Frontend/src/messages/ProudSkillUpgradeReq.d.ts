/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1073
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ProudSkillUpgradeReq {
  AvatarGuid?: Long;
  OldProudSkillLevel?: number;
  ProudSkillId?: number;
}
