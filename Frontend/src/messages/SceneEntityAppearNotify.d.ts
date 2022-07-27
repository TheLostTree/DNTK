/* eslint-disable */
import type { VisionType } from "./VisionType.d.ts";
import type { SceneEntityInfo } from "./SceneEntityInfo.d.ts";

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
