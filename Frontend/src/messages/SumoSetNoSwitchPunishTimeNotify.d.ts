/* eslint-disable */
import type { SumoDungeonTeam } from "./SumoDungeonTeam.d.ts";

/**
 * CmdId: 8935
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SumoSetNoSwitchPunishTimeNotify {
  CurTeamIndex?: number;
  StageId?: number;
  DungeonTeamList?: SumoDungeonTeam[];
  NoSwitchPunishTime?: number;
  NextValidSwitchTime?: number;
  ActivityId?: number;
}
