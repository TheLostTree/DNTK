/* eslint-disable */
import type { SumoDungeonTeam } from "./SumoDungeonTeam";

/**
 * CmdId: 8525
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SumoSwitchTeamRsp {
  NextValidSwitchTime?: number;
  DungeonTeamList?: SumoDungeonTeam[];
  ActivityId?: number;
  Retcode?: number;
  CurTeamIndex?: number;
  StageId?: number;
}
