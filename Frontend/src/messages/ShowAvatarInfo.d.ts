/* eslint-disable */
import type { AvatarFetterInfo } from "./AvatarFetterInfo.d.ts";
import type { AvatarExcelInfo } from "./AvatarExcelInfo.d.ts";
import type { PropValue } from "./PropValue.d.ts";
import type { ShowEquip } from "./ShowEquip.d.ts";

export interface ShowAvatarInfo {
  AvatarId?: number;
  PropMap?: { [key: number]: PropValue };
  TalentIdList?: number[];
  FightPropMap?: { [key: number]: number };
  SkillDepotId?: number;
  CoreProudSkillLevel?: number;
  InherentProudSkillList?: number[];
  SkillLevelMap?: { [key: number]: number };
  ProudSkillExtraLevelMap?: { [key: number]: number };
  EquipList?: ShowEquip[];
  FetterInfo?: AvatarFetterInfo;
  CostumeId?: number;
  ExcelInfo?: AvatarExcelInfo;
}

export interface ShowAvatarInfo_PropMapEntry {
  Key: number;
  Value?: PropValue;
}

export interface ShowAvatarInfo_FightPropMapEntry {
  Key: number;
  Value: number;
}

export interface ShowAvatarInfo_SkillLevelMapEntry {
  Key: number;
  Value: number;
}

export interface ShowAvatarInfo_ProudSkillExtraLevelMapEntry {
  Key: number;
  Value: number;
}
