/* eslint-disable */
import type { VisionType } from "./VisionType";
import type { SceneEntityInfo } from "./SceneEntityInfo";

/**
 * CmdId: 221
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneEntityAppearNotify {
  AppearType?: VisionType;
  Param?: number;
  EntityList?: SceneEntityInfo[];
}
