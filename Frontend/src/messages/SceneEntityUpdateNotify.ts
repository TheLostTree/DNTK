/* eslint-disable */
import type { VisionType } from "./VisionType.ts";
import type { SceneEntityInfo } from "./SceneEntityInfo.ts";

/**
 * CmdId: 3412
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneEntityUpdateNotify {
  Param?: number;
  AppearType?: VisionType;
  EntityList?: SceneEntityInfo[];
}
