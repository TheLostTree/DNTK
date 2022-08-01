/* eslint-disable */
import type { ChannelerSlabLoopDungeonInfo } from "./ChannelerSlabLoopDungeonInfo.ts";

export interface ChannelerSlabLoopDungeonStageInfo {
  DungeonInfoList?: ChannelerSlabLoopDungeonInfo[];
  TakenRewardIndexList?: number[];
  IsOpen?: boolean;
  LastDifficultyId?: number;
  OpenTime?: number;
}
