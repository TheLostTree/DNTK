/* eslint-disable */
export interface FleurFairGallerySettleInfo {
  Energy?: number;
  GalleryStageIndex?: number;
  EnergyStatMap?: { [key: number]: number };
  GalleryStageCount?: number;
  IsSuccess?: boolean;
}

export interface FleurFairGallerySettleInfo_EnergyStatMapEntry {
  Key: number;
  Value: number;
}
