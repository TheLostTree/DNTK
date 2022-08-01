/* eslint-disable */
import type { VisionType } from "./VisionType.ts";
import type { SceneEntityInfo } from "./SceneEntityInfo.ts";

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
