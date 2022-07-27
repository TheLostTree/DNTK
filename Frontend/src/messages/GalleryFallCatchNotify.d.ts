/* eslint-disable */
/**
 * CmdId: 5507
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GalleryFallCatchNotify {
  CurScore?: number;
  TimeCost?: number;
  BallCatchCountMap?: { [key: number]: number };
  AddScore?: number;
  IsGround?: boolean;
  GalleryId?: number;
}

export interface GalleryFallCatchNotify_BallCatchCountMapEntry {
  Key: number;
  Value: number;
}
