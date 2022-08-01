/* eslint-disable */
import type { BonusActivityInfo } from "./BonusActivityInfo";

/**
 * CmdId: 2505
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetBonusActivityRewardRsp {
  BonusActivityInfoList?: BonusActivityInfo;
  Retcode?: number;
}
