/* eslint-disable */
import type { FishingGallerySettleInfo } from "./FishingGallerySettleInfo";

/**
 * CmdId: 8780
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FishingGallerySettleNotify {
  GalleryId?: number;
  LevelId?: number;
  SettleInfo?: FishingGallerySettleInfo;
}
