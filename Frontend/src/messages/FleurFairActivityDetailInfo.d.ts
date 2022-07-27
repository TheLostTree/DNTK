/* eslint-disable */
import type { FleurFairMinigameInfo } from "./FleurFairMinigameInfo.d.ts";
import type { FleurFairDungeonSectionInfo } from "./FleurFairDungeonSectionInfo.d.ts";
import type { FleurFairChapterInfo } from "./FleurFairChapterInfo.d.ts";

export interface FleurFairActivityDetailInfo {
  IsContentClosed?: boolean;
  DungeonPunishOverTime?: number;
  ContentCloseTime?: number;
  ObtainedToken?: number;
  ChapterInfoList?: FleurFairChapterInfo[];
  MinigameInfoMap?: { [key: number]: FleurFairMinigameInfo };
  DungeonSectionInfoMap?: { [key: number]: FleurFairDungeonSectionInfo };
  IsDungeonUnlocked?: boolean;
}

export interface FleurFairActivityDetailInfo_MinigameInfoMapEntry {
  Key: number;
  Value?: FleurFairMinigameInfo;
}

export interface FleurFairActivityDetailInfo_DungeonSectionInfoMapEntry {
  Key: number;
  Value?: FleurFairDungeonSectionInfo;
}
