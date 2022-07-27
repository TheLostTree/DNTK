/* eslint-disable */
import type { CityReputationInfo } from "./CityReputationInfo.d.ts";

/**
 * CmdId: 2898
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetCityReputationInfoRsp {
  CityId?: number;
  Retcode?: number;
  CityReputationInfo?: CityReputationInfo;
}
