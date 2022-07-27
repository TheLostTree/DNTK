/* eslint-disable */
import type { HomeSceneArrangementInfo } from "./HomeSceneArrangementInfo.d.ts";

/**
 * CmdId: 4844
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeGetArrangementInfoRsp {
  Retcode?: number;
  SceneArrangementInfoList?: HomeSceneArrangementInfo[];
}
