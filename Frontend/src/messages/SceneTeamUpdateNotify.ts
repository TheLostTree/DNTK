/* eslint-disable */
import type { SceneTeamAvatar } from "./SceneTeamAvatar";

/**
 * CmdId: 1775
 * EnetChannelId: 0
 * EnetIsReliable: false
 * IsAllowClient: true
 */
export interface SceneTeamUpdateNotify {
  SceneTeamAvatarList?: SceneTeamAvatar[];
  IsInMp?: boolean;
}
