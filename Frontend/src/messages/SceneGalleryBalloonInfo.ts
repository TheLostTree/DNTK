/* eslint-disable */
import type { BalloonPlayerInfo } from "./BalloonPlayerInfo.ts";

export interface SceneGalleryBalloonInfo {
  ScenePlayerBalloonInfoMap?: { [key: number]: BalloonPlayerInfo };
  EndTime?: number;
}

export interface SceneGalleryBalloonInfo_ScenePlayerBalloonInfoMapEntry {
  Key: number;
  Value?: BalloonPlayerInfo;
}
