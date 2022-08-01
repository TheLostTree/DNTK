/* eslint-disable */
import type { SumoDungeonTeam } from "./SumoDungeonTeam.ts";

/**
 * CmdId: 8013
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SumoEnterDungeonNotify {
  ActivityId?: number;
  DungeonTeamList?: SumoDungeonTeam[];
  NoSwitchPunishTime?: number;
  NextValidSwitchTime?: number;
  StageId?: number;
  CurTeamIndex?: number;
}
