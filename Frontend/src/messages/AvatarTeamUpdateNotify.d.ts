/* eslint-disable */
import type { AvatarTeam } from "./AvatarTeam.d.ts";
import type Long from "long";

/**
 * CmdId: 1706
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarTeamUpdateNotify {
  AvatarTeamMap?: { [key: number]: AvatarTeam };
  TempAvatarGuidList?: Long[];
}

export interface AvatarTeamUpdateNotify_AvatarTeamMapEntry {
  Key: number;
  Value?: AvatarTeam;
}
