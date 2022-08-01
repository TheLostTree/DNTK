/* eslint-disable */
import type { OpActivityInfo } from "./OpActivityInfo.ts";

/**
 * CmdId: 5198
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetOpActivityInfoRsp {
  Retcode?: number;
  OpActivityInfoList?: OpActivityInfo[];
}
