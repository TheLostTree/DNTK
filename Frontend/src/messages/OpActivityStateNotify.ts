/* eslint-disable */
import type { OpActivityTagBriefInfo } from "./OpActivityTagBriefInfo";

/**
 * CmdId: 2572
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface OpActivityStateNotify {
  FinishedBonusActivityIdList?: number[];
  OpenedOpActivityInfoList?: OpActivityTagBriefInfo[];
}
