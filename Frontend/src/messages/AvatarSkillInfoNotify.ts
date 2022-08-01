/* eslint-disable */
import type Long from "long";
import type { AvatarSkillInfo } from "./AvatarSkillInfo";

/**
 * CmdId: 1090
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarSkillInfoNotify {
  SkillMap?: { [key: number]: AvatarSkillInfo };
  Guid?: Long;
}

export interface AvatarSkillInfoNotify_SkillMapEntry {
  Key: number;
  Value?: AvatarSkillInfo;
}
