/* eslint-disable */
import type { FleurFairMinigameInfo } from "./FleurFairMinigameInfo";
import type { FleurFairDungeonSectionInfo } from "./FleurFairDungeonSectionInfo";
import type { FleurFairChapterInfo } from "./FleurFairChapterInfo";

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
