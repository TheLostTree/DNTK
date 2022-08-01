/* eslint-disable */
import type { ExpeditionChallengeInfo } from "./ExpeditionChallengeInfo.ts";
import type { ExpeditionPathInfo } from "./ExpeditionPathInfo.ts";

export interface ExpeditionActivityDetailInfo {
  CurChallengeId?: number;
  ChallengeInfoList?: ExpeditionChallengeInfo[];
  ExpeditionCount?: number;
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  PathInfoList?: ExpeditionPathInfo[];
}
