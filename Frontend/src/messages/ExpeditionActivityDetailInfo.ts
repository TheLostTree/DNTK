/* eslint-disable */
import type { ExpeditionChallengeInfo } from "./ExpeditionChallengeInfo";
import type { ExpeditionPathInfo } from "./ExpeditionPathInfo";

export interface ExpeditionActivityDetailInfo {
  CurChallengeId?: number;
  ChallengeInfoList?: ExpeditionChallengeInfo[];
  ExpeditionCount?: number;
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  PathInfoList?: ExpeditionPathInfo[];
}
