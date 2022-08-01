/* eslint-disable */
import type { FishInfo } from "./FishInfo.ts";
import type { FishingScore } from "./FishingScore.ts";

export interface FishingGallerySettleInfo {
  FishMap?: { [key: number]: FishInfo };
  FishingScoreList?: FishingScore[];
}

export interface FishingGallerySettleInfo_FishMapEntry {
  Key: number;
  Value?: FishInfo;
}
