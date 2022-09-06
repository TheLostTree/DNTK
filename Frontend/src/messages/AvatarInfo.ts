/* eslint-disable */
import Long from "long";
import type { TrialAvatarInfo } from "./TrialAvatarInfo";
import type { AvatarFetterInfo } from "./AvatarFetterInfo";
import type { AvatarExpeditionState } from "./AvatarExpeditionState";
import type { AvatarExcelInfo } from "./AvatarExcelInfo";
import type { PropValue } from "./PropValue";
import type { AvatarSkillInfo } from "./AvatarSkillInfo";
import type { AvatarEquipAffixInfo } from "./AvatarEquipAffixInfo";

export interface AvatarInfo {
  AvatarId?: number;
  Guid?: Long;
  PropMap?: { [key: number]: PropValue };
  LifeState?: number;
  EquipGuidList?: Long[];
  TalentIdList?: number[];
  FightPropMap?: { [key: number]: number };
  TrialAvatarInfo?: TrialAvatarInfo;
  SkillMap?: { [key: number]: AvatarSkillInfo };
  SkillDepotId?: number;
  FetterInfo?: AvatarFetterInfo;
  CoreProudSkillLevel?: number;
  InherentProudSkillList?: number[];
  SkillLevelMap?: { [key: number]: number };
  ExpeditionState?: AvatarExpeditionState;
  ProudSkillExtraLevelMap?: { [key: number]: number };
  IsFocus?: boolean;
  AvatarType?: number;
  TeamResonanceList?: number[];
  WearingFlycloakId?: number;
  EquipAffixList?: AvatarEquipAffixInfo[];
  BornTime?: number;
  PendingPromoteRewardList?: number[];
  CostumeId?: number;
  ExcelInfo?: AvatarExcelInfo;
  AnimHash?: number;
}

export interface AvatarInfo_PropMapEntry {
  Key: number;
  Value?: PropValue;
}

export interface AvatarInfo_FightPropMapEntry {
  Key: number;
  Value: number;
}

export interface AvatarInfo_SkillMapEntry {
  Key: number;
  Value?: AvatarSkillInfo;
}

export interface AvatarInfo_SkillLevelMapEntry {
  Key: number;
  Value: number;
}

export interface AvatarInfo_ProudSkillExtraLevelMapEntry {
  Key: number;
  Value: number;
}
