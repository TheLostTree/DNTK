/* eslint-disable */
import type { TowerLevelStarCondData } from "./TowerLevelStarCondData";

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
