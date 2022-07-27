/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1003
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarSkillMaxChargeCountNotify {
  SkillId?: number;
  MaxChargeCount?: number;
  AvatarGuid?: Long;
}
