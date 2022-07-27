/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.d.ts";
import type Long from "long";
import type { ServerBuff } from "./ServerBuff.d.ts";

export interface AvatarEnterSceneInfo {
  ServerBuffList?: ServerBuff[];
  AvatarEntityId?: number;
  WeaponAbilityInfo?: AbilitySyncStateInfo;
  WeaponEntityId?: number;
  AvatarAbilityInfo?: AbilitySyncStateInfo;
  AvatarGuid?: Long;
  WeaponGuid?: Long;
  BuffIdList?: number[];
}
