/* eslint-disable */
import type { FleurFairGallerySettleInfo } from "./FleurFairGallerySettleInfo.ts";
import type { FleurFairBossSettleInfo } from "./FleurFairBossSettleInfo.ts";

/**
 * CmdId: 5356
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface FleurFairStageSettleNotify {
  StageType?: number;
  GallerySettleInfo?: FleurFairGallerySettleInfo | undefined;
  BossSettleInfo?: FleurFairBossSettleInfo | undefined;
}
