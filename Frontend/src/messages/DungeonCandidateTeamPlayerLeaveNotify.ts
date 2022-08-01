/* eslint-disable */
import type { DungeonCandidateTeamPlayerLeaveReason } from "./DungeonCandidateTeamPlayerLeaveReason";

/**
 * CmdId: 926
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonCandidateTeamPlayerLeaveNotify {
  Reason?: DungeonCandidateTeamPlayerLeaveReason;
  PlayerUid?: number;
}
