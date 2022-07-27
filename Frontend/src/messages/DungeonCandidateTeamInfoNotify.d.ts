/* eslint-disable */
import type { DungeonCandidateTeamPlayerState } from "./DungeonCandidateTeamPlayerState.d.ts";
import type { DungeonCandidateTeamAvatar } from "./DungeonCandidateTeamAvatar.d.ts";

/**
 * CmdId: 927
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonCandidateTeamInfoNotify {
  PlayerStateMap?: { [key: number]: DungeonCandidateTeamPlayerState };
  DungeonId?: number;
  ReadyPlayerUid?: number[];
  MatchType?: number;
  AvatarList?: DungeonCandidateTeamAvatar[];
}

export interface DungeonCandidateTeamInfoNotify_PlayerStateMapEntry {
  Key: number;
  Value: DungeonCandidateTeamPlayerState;
}
