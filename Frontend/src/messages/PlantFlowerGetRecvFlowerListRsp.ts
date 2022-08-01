/* eslint-disable */
import type { PlantFlowerRecvFlowerData } from "./PlantFlowerRecvFlowerData";

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
