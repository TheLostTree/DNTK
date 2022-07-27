/* eslint-disable */
import type Long from "long";
import type { TrialAvatarInfo } from "./TrialAvatarInfo.d.ts";
import type { AvatarFetterInfo } from "./AvatarFetterInfo.d.ts";
import type { AvatarExpeditionState } from "./AvatarExpeditionState.d.ts";
import type { AvatarExcelInfo } from "./AvatarExcelInfo.d.ts";
import type { PropValue } from "./PropValue.d.ts";
import type { AvatarSkillInfo } from "./AvatarSkillInfo.d.ts";
import type { AvatarEquipAffixInfo } from "./AvatarEquipAffixInfo.d.ts";

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
