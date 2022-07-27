/* eslint-disable */
import type { FishInfo } from "./FishInfo.d.ts";
import type { FishingScore } from "./FishingScore.d.ts";

export interface FishingGallerySettleInfo {
  FishMap?: { [key: number]: FishInfo };
  FishingScoreList?: FishingScore[];
}

export interface FishingGallerySettleInfo_FishMapEntry {
  Key: number;
  Value?: FishInfo;
}
