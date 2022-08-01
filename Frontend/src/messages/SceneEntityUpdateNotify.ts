/* eslint-disable */
import type { VisionType } from "./VisionType";
import type { SceneEntityInfo } from "./SceneEntityInfo";

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
