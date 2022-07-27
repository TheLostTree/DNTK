/* eslint-disable */
import type { MechanicusInfo } from "./MechanicusInfo.d.ts";

/**
 * CmdId: 3998
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetMechanicusInfoRsp {
  Retcode?: number;
  MechanicusInfo?: MechanicusInfo;
}
