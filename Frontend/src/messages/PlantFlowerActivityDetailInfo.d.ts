/* eslint-disable */
export interface PlantFlowerActivityDetailInfo {
  IsContentClosed?: boolean;
  WishFlowerNumMap?: { [key: number]: number };
  TodaySeedRewardId?: number;
  DayIndex?: number;
  IsTodayHasAwarded?: boolean;
  UsedFlowerNumMap?: { [key: number]: number };
}

export interface PlantFlowerActivityDetailInfo_WishFlowerNumMapEntry {
  Key: number;
  Value: number;
}

export interface PlantFlowerActivityDetailInfo_UsedFlowerNumMapEntry {
  Key: number;
  Value: number;
}
