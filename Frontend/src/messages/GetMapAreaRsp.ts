/* eslint-disable */
import type { MapAreaInfo } from "./MapAreaInfo";

/**
 * CmdId: 3328
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetMapAreaRsp {
  Retcode?: number;
  MapAreaInfoList?: MapAreaInfo[];
}
