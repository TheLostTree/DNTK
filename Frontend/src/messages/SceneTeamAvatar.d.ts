/* eslint-disable */
import type { AbilitySyncStateInfo } from "./AbilitySyncStateInfo.d.ts";
import type { AvatarInfo } from "./AvatarInfo.d.ts";
import type Long from "long";
import type { SceneAvatarInfo } from "./SceneAvatarInfo.d.ts";
import type { SceneEntityInfo } from "./SceneEntityInfo.d.ts";
import type { AbilityControlBlock } from "./AbilityControlBlock.d.ts";
import type { ServerBuff } from "./ServerBuff.d.ts";

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
