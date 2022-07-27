/* eslint-disable */
import type { ObstacleInfo } from "./ObstacleInfo.d.ts";

/**
 * CmdId: 2307
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PathfindingEnterSceneReq {
  SceneId?: number;
  ActivityId?: number[];
  Unk2800NCDFAFMGMIG?: number;
  Version?: number;
  IsEditor?: boolean;
  Obstacles?: ObstacleInfo[];
  Unk2800MBDFGODMPFN?: number;
}
