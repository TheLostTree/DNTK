/* eslint-disable */
import type { MapAreaInfo } from "./MapAreaInfo.d.ts";

/**
 * CmdId: 3328
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetMapAreaRsp {
  Retcode?: number;
  MapAreaInfoList?: MapAreaInfo[];
}
