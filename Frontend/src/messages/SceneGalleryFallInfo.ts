/* eslint-disable */
import type { FallPlayerInfo } from "./FallPlayerInfo";

export interface SceneGalleryFallInfo {
  ScenePlayerFallInfoMap?: { [key: number]: FallPlayerInfo };
  EndTime?: number;
}

export interface SceneGalleryFallInfo_ScenePlayerFallInfoMapEntry {
  Key: number;
  Value?: FallPlayerInfo;
}
