/* eslint-disable */
import type { ReunionMissionInfo } from "./ReunionMissionInfo.ts";

/**
 * CmdId: 5064
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface TakeReunionMissionRewardRsp {
  RewardIndex?: number;
  Retcode?: number;
  MissionInfo?: ReunionMissionInfo;
  RewardId?: number;
}
