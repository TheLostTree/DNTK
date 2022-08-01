/* eslint-disable */
import type { SumoTeamData } from "./SumoTeamData.ts";

/**
 * CmdId: 8215
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface SumoSelectTeamAndEnterDungeonReq {
  ActivityId?: number;
  StageId?: number;
  DifficultyId?: number;
  TeamList?: SumoTeamData[];
}
