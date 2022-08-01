/* eslint-disable */
import type { PlantFlowerAcceptFlowerResultInfo } from "./PlantFlowerAcceptFlowerResultInfo.ts";

/**
 * CmdId: 8567
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlantFlowerAcceptGiveFlowerRsp {
  ScheduleId?: number;
  AcceptFlowerResultInfo?: PlantFlowerAcceptFlowerResultInfo;
  Retcode?: number;
}
