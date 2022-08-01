/* eslint-disable */
import type { GalleryFlowerStartParam } from "./GalleryFlowerStartParam.ts";

/**
 * CmdId: 5572
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GalleryStartNotify {
  GalleryId?: number;
  EndTime?: number;
  PlayerCount?: number;
  OwnerUid?: number;
  FlowerStartParam?: GalleryFlowerStartParam | undefined;
}
