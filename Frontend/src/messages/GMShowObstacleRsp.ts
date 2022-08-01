/* eslint-disable */
import type { ObstacleInfo } from "./ObstacleInfo";

/**
 * CmdId: 2329
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GMShowObstacleRsp {
  Retcode?: number;
  Obstacles?: ObstacleInfo[];
}
