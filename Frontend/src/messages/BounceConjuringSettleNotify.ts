/* eslint-disable */
import type { BounceConjuringGallerySettleInfo } from "./BounceConjuringGallerySettleInfo.ts";

/**
 * CmdId: 8084
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BounceConjuringSettleNotify {
  IsNewRecord?: boolean;
  SettleInfoMap?: { [key: number]: BounceConjuringGallerySettleInfo };
  TotalScore?: number;
  ChapterId?: number;
}

export interface BounceConjuringSettleNotify_SettleInfoMapEntry {
  Key: number;
  Value?: BounceConjuringGallerySettleInfo;
}
