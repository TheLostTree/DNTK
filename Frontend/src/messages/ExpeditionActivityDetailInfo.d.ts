/* eslint-disable */
import type { ExpeditionChallengeInfo } from "./ExpeditionChallengeInfo.d.ts";
import type { ExpeditionPathInfo } from "./ExpeditionPathInfo.d.ts";

export interface ExpeditionActivityDetailInfo {
  CurChallengeId?: number;
  ChallengeInfoList?: ExpeditionChallengeInfo[];
  ExpeditionCount?: number;
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  PathInfoList?: ExpeditionPathInfo[];
}
