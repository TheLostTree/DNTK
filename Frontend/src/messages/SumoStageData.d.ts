/* eslint-disable */
import type { SumoTeamData } from "./SumoTeamData.d.ts";

export interface SumoStageData {
  MaxScore?: number;
  OpenTime?: number;
  StageId?: number;
  TeamList?: SumoTeamData[];
  IsOpen?: boolean;
}
