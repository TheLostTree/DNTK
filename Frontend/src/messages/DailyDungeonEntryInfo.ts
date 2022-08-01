/* eslint-disable */
import type { DungeonEntryInfo } from "./DungeonEntryInfo.ts";

export interface DailyDungeonEntryInfo {
  DungeonEntryConfigId?: number;
  DungeonEntryId?: number;
  RecommendDungeonEntryInfo?: DungeonEntryInfo;
  RecommendDungeonId?: number;
}
