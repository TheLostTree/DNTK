/* eslint-disable */
import type { ActivityScheduleInfo } from "./ActivityScheduleInfo";

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
