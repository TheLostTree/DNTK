/* eslint-disable */
/**
 * CmdId: 5512
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GalleryBalloonScoreNotify {
  GalleryId?: number;
  UidScoreMap?: { [key: number]: number };
}

export interface GalleryBalloonScoreNotify_UidScoreMapEntry {
  Key: number;
  Value: number;
}
