/* eslint-disable */
import type { FishInfo } from "./FishInfo";
import type { FishingScore } from "./FishingScore";

export interface FishingGallerySettleInfo {
  FishMap?: { [key: number]: FishInfo };
  FishingScoreList?: FishingScore[];
}

export interface FishingGallerySettleInfo_FishMapEntry {
  Key: number;
  Value?: FishInfo;
}
