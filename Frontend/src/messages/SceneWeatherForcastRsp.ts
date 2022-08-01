/* eslint-disable */
import type Long from "long";

/**
 * CmdId: 3012
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneWeatherForcastRsp {
  NextClimateTime?: Long;
  ForcastClimateList?: number[];
  Retcode?: number;
}
