/* eslint-disable */
import type { VisionType } from "./VisionType.d.ts";

/**
 * CmdId: 203
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneEntityDisappearNotify {
  Param?: number;
  EntityList?: number[];
  DisappearType?: VisionType;
}
