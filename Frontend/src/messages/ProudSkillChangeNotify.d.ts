/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1031
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ProudSkillChangeNotify {
  AvatarGuid?: Long;
  EntityId?: number;
  SkillDepotId?: number;
  ProudSkillList?: number[];
}
