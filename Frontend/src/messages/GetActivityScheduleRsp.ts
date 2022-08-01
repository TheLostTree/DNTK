/* eslint-disable */
import type { ActivityScheduleInfo } from "./ActivityScheduleInfo.ts";

/**
 * CmdId: 2107
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetActivityScheduleRsp {
  ActivityScheduleList?: ActivityScheduleInfo[];
  Retcode?: number;
  RemainFlySeaLampNum?: number;
}
