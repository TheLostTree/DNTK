/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 1035
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarSkillDepotChangeNotify {
  SkillDepotId?: number;
  ProudSkillExtraLevelMap?: { [key: number]: number };
  TalentIdList?: number[];
  ProudSkillList?: number[];
  CoreProudSkillLevel?: number;
  EntityId?: number;
  AvatarGuid?: Long;
  SkillLevelMap?: { [key: number]: number };
}

export interface AvatarSkillDepotChangeNotify_ProudSkillExtraLevelMapEntry {
  Key: number;
  Value: number;
}

export interface AvatarSkillDepotChangeNotify_SkillLevelMapEntry {
  Key: number;
  Value: number;
}
