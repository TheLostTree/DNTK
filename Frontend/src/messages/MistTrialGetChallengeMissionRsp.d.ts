/* eslint-disable */
import type { MistTrialMissionInfo } from "./MistTrialMissionInfo.d.ts";

/**
 * CmdId: 8508
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MistTrialGetChallengeMissionRsp {
  TrialId?: number;
  MissionInfoList?: MistTrialMissionInfo[];
  Retcode?: number;
}
