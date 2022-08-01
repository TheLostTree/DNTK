/* eslint-disable */
import type { FallPlayerBrief } from "./FallPlayerBrief.ts";

/**
 * CmdId: 5521
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GalleryFallScoreNotify {
  GalleryId?: number;
  UidBriefMap?: { [key: number]: FallPlayerBrief };
}

export interface GalleryFallScoreNotify_UidBriefMapEntry {
  Key: number;
  Value?: FallPlayerBrief;
}
