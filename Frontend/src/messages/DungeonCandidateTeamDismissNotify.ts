/* eslint-disable */
import type { DungeonCandidateTeamDismissReason } from "./DungeonCandidateTeamDismissReason";

/**
 * CmdId: 963
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonCandidateTeamDismissNotify {
  Reason?: DungeonCandidateTeamDismissReason;
  PlayerUid?: number;
}
