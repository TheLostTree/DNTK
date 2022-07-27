/* eslint-disable */
import type { TowerLevelStarCondData } from "./TowerLevelStarCondData.d.ts";

/**
 * CmdId: 2406
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface TowerLevelStarCondNotify {
  LevelIndex?: number;
  FloorId?: number;
  CondDataList?: TowerLevelStarCondData[];
}
