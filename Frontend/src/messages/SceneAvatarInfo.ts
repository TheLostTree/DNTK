/* eslint-disable */
import type Long from "long";
import type { SceneWeaponInfo } from "./SceneWeaponInfo.ts";
import type { CurVehicleInfo } from "./CurVehicleInfo.ts";
import type { AvatarExcelInfo } from "./AvatarExcelInfo.ts";
import type { SceneReliquaryInfo } from "./SceneReliquaryInfo.ts";
import type { ServerBuff } from "./ServerBuff.ts";

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
