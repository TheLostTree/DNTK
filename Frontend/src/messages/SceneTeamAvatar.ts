/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.ts";
import type { AvatarInfo } from "./AvatarInfo.ts";
import type Long from "long";
import type { SceneAvatarInfo } from "./SceneAvatarInfo.ts";
import type { SceneEntityInfo } from "./SceneEntityInfo.ts";
import type { AbilityControlBlock } from "./AbilityControlBlock.ts";
import type { ServerBuff } from "./ServerBuff.ts";

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
