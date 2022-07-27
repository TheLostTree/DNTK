/* eslint-disable */
import type { ChallengeRecord } from "./ChallengeRecord.d.ts";

/**
 * CmdId: 993
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChallengeRecordNotify {
  GroupId?: number;
  ChallengeRecordList?: ChallengeRecord[];
}
