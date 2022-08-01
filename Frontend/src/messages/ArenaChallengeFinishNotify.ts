/* eslint-disable */
import type { ArenaChallengeChildChallengeInfo } from "./ArenaChallengeChildChallengeInfo";

/**
 * CmdId: 2030
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ArenaChallengeFinishNotify {
  ArenaChallengeLevel?: number;
  ArenaChallengeId?: number;
  ChildChallengeList?: ArenaChallengeChildChallengeInfo[];
  IsSuccess?: boolean;
}
