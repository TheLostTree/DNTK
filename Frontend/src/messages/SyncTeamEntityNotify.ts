/* eslint-disable */
import type { TeamEntityInfo } from "./TeamEntityInfo.ts";

/**
 * CmdId: 317
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SyncTeamEntityNotify {
  SceneId?: number;
  TeamEntityInfoList?: TeamEntityInfo[];
}
