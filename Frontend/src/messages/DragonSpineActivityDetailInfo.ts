/* eslint-disable */
import type { DragonSpineChapterInfo } from "./DragonSpineChapterInfo.ts";

export interface DragonSpineActivityDetailInfo {
  IsContentClosed?: boolean;
  ChapterInfoList?: DragonSpineChapterInfo[];
  WeaponEnhanceLevel?: number;
  ContentFinishTime?: number;
  ShimmeringEssence?: number;
  WarmEssence?: number;
  WondrousEssence?: number;
}
