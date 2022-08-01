/* eslint-disable */
import type { SumoTeamData } from "./SumoTeamData";

/**
 * CmdId: 8193
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SumoSelectTeamAndEnterDungeonRsp {
  Retcode?: number;
  ActivityId?: number;
  DifficultyId?: number;
  StageId?: number;
  TeamList?: SumoTeamData[];
}
