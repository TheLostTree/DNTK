/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1097
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarSkillChangeNotify {
  CurLevel?: number;
  AvatarGuid?: Long;
  EntityId?: number;
  SkillDepotId?: number;
  OldLevel?: number;
  AvatarSkillId?: number;
}
