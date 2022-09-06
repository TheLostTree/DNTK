/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
import Long from "long";
import type { ServerBuff } from "./ServerBuff";

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
