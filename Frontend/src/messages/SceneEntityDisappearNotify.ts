/* eslint-disable */
import type { VisionType } from "./VisionType";

/**
 * CmdId: 203
 * EnetChannelId: 0
 * EnetIsReliable: false
 * IsAllowClient: true
 */
export interface SceneEntityDisappearNotify {
  Param?: number;
  EntityList?: number[];
  DisappearType?: VisionType;
}
