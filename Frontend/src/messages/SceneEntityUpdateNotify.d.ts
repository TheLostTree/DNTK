/* eslint-disable */
import type { VisionType } from "./VisionType.d.ts";
import type { SceneEntityInfo } from "./SceneEntityInfo.d.ts";

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
