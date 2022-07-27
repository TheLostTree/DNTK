/* eslint-disable */
import type { BonusActivityInfo } from "./BonusActivityInfo.d.ts";

/**
 * CmdId: 2597
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BonusActivityInfoRsp {
  BonusActivityInfoList?: BonusActivityInfo[];
  Retcode?: number;
}
