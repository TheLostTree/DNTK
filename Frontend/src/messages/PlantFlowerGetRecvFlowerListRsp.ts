/* eslint-disable */
import type { PlantFlowerRecvFlowerData } from "./PlantFlowerRecvFlowerData.ts";

/**
 * CmdId: 8374
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlantFlowerGetRecvFlowerListRsp {
  ScheduleId?: number;
  Retcode?: number;
  RecvFlowerList?: PlantFlowerRecvFlowerData[];
}
