/* eslint-disable */
import type { MechanicusInfo } from "./MechanicusInfo";

/**
 * CmdId: 3998
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetMechanicusInfoRsp {
  Retcode?: number;
  MechanicusInfo?: MechanicusInfo;
}
