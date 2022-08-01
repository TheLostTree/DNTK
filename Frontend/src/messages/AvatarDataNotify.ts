/* eslint-disable */
import type Long from "long";
import type { AvatarTeam } from "./AvatarTeam";
import type { AvatarInfo } from "./AvatarInfo";

/**
 * CmdId: 1633
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarDataNotify {
  OwnedFlycloakList?: number[];
  CurAvatarTeamId?: number;
  AvatarList?: AvatarInfo[];
  OwnedCostumeList?: number[];
  TempAvatarGuidList?: Long[];
  AvatarTeamMap?: { [key: number]: AvatarTeam };
  ChooseAvatarGuid?: Long;
}

export interface AvatarDataNotify_AvatarTeamMapEntry {
  Key: number;
  Value?: AvatarTeam;
}
