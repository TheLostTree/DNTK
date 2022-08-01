/* eslint-disable */
import type { MistTrialMissionInfo } from "./MistTrialMissionInfo";

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
