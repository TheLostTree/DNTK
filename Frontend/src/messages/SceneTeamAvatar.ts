/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo";
import type { AvatarInfo } from "./AvatarInfo";
import Long from "long";
import type { SceneAvatarInfo } from "./SceneAvatarInfo";
import type { SceneEntityInfo } from "./SceneEntityInfo";
import type { AbilityControlBlock } from "./AbilityControlBlock";
import type { ServerBuff } from "./ServerBuff";

export interface SceneTeamAvatar {
  AvatarAbilityInfo?: AbilitySyncStateInfo;
  AvatarInfo?: AvatarInfo;
  IsOnScene?: boolean;
  EntityId?: number;
  AvatarGuid?: Long;
  SceneId?: number;
  WeaponEntityId?: number;
  SceneAvatarInfo?: SceneAvatarInfo;
  WeaponGuid?: Long;
  WeaponAbilityInfo?: AbilitySyncStateInfo;
  SceneEntityInfo?: SceneEntityInfo;
  PlayerUid?: number;
  IsReconnect?: boolean;
  AbilityControlBlock?: AbilityControlBlock;
  IsPlayerCurAvatar?: boolean;
  ServerBuffList?: ServerBuff[];
}
