/* eslint-disable */
import Long from "long";
import type { SceneWeaponInfo } from "./SceneWeaponInfo";
import type { CurVehicleInfo } from "./CurVehicleInfo";
import type { AvatarExcelInfo } from "./AvatarExcelInfo";
import type { SceneReliquaryInfo } from "./SceneReliquaryInfo";
import type { ServerBuff } from "./ServerBuff";

export interface SceneAvatarInfo {
  Uid?: number;
  AvatarId?: number;
  Guid?: Long;
  PeerId?: number;
  EquipIdList?: number[];
  SkillDepotId?: number;
  TalentIdList?: number[];
  Weapon?: SceneWeaponInfo;
  ReliquaryList?: SceneReliquaryInfo[];
  CoreProudSkillLevel?: number;
  InherentProudSkillList?: number[];
  SkillLevelMap?: { [key: number]: number };
  ProudSkillExtraLevelMap?: { [key: number]: number };
  ServerBuffList?: ServerBuff[];
  TeamResonanceList?: number[];
  WearingFlycloakId?: number;
  BornTime?: number;
  CostumeId?: number;
  CurVehicleInfo?: CurVehicleInfo;
  ExcelInfo?: AvatarExcelInfo;
  AnimHash?: number;
}

export interface SceneAvatarInfo_SkillLevelMapEntry {
  Key: number;
  Value: number;
}

export interface SceneAvatarInfo_ProudSkillExtraLevelMapEntry {
  Key: number;
  Value: number;
}
