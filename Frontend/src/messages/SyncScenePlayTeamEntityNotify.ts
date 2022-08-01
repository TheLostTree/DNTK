/* eslint-disable */
import type { PlayTeamEntityInfo } from "./PlayTeamEntityInfo.ts";

/**
 * CmdId: 3333
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SyncScenePlayTeamEntityNotify {
  SceneId?: number;
  EntityInfoList?: PlayTeamEntityInfo[];
}
