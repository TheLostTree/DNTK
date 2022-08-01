/* eslint-disable */
import type { ActivityScheduleInfo } from "./ActivityScheduleInfo.ts";

/**
 * CmdId: 2073
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface ActivityScheduleInfoNotify {
  ActivityScheduleList?: ActivityScheduleInfo[];
  RemainFlySeaLampNum?: number;
}
