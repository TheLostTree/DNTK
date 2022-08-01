/* eslint-disable */
import type { SumoTeamData } from "./SumoTeamData";

/**
 * CmdId: 8319
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SumoSaveTeamRsp {
  StageId?: number;
  Retcode?: number;
  ActivityId?: number;
  TeamList?: SumoTeamData[];
  DifficultyId?: number;
}
