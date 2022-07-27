/* eslint-disable */
import type { SceneGalleryInfo } from "./SceneGalleryInfo.d.ts";

/**
 * CmdId: 5590
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetAllSceneGalleryInfoRsp {
  GalleryInfoList?: SceneGalleryInfo[];
  Retcode?: number;
}
