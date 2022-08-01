/* eslint-disable */
import type Long from "long";
import type { SceneReliquaryInfo } from "./SceneReliquaryInfo.ts";
import type { SceneWeaponInfo } from "./SceneWeaponInfo.ts";

/**
 * CmdId: 647
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface AvatarEquipChangeNotify {
  AvatarGuid?: Long;
  EquipGuid?: Long;
  Reliquary?: SceneReliquaryInfo;
  Weapon?: SceneWeaponInfo;
  ItemId?: number;
  EquipType?: number;
}
