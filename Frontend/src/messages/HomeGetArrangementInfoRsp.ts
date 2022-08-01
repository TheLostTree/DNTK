/* eslint-disable */
import type { HomeSceneArrangementInfo } from "./HomeSceneArrangementInfo.ts";

/**
 * CmdId: 4844
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeGetArrangementInfoRsp {
  Retcode?: number;
  SceneArrangementInfoList?: HomeSceneArrangementInfo[];
}
