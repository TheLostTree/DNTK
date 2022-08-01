/* eslint-disable */
import type { SumoTeamData } from "./SumoTeamData.ts";

/**
 * CmdId: 8313
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SumoSaveTeamReq {
  ActivityId?: number;
  StageId?: number;
  DifficultyId?: number;
  TeamList?: SumoTeamData[];
}
