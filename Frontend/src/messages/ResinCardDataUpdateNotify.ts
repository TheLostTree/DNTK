/* eslint-disable */
import type { ResinCardData } from "./ResinCardData.ts";

/**
 * CmdId: 4149
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ResinCardDataUpdateNotify {
  TodayStartTime?: number;
  CardDataList?: ResinCardData[];
}
