/* eslint-disable */
import type { SumoTeamData } from "./SumoTeamData";

export interface SumoStageData {
  MaxScore?: number;
  OpenTime?: number;
  StageId?: number;
  TeamList?: SumoTeamData[];
  IsOpen?: boolean;
}
