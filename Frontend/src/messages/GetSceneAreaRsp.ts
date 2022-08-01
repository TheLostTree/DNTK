/* eslint-disable */
import type { CityInfo } from "./CityInfo";

/**
 * CmdId: 204
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetSceneAreaRsp {
  Retcode?: number;
  CityInfoList?: CityInfo[];
  SceneId?: number;
  AreaIdList?: number[];
}
