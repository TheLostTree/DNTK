/* eslint-disable */
import type { SceneTeamAvatar } from "./SceneTeamAvatar";

/**
 * CmdId: 1775
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneTeamUpdateNotify {
  SceneTeamAvatarList?: SceneTeamAvatar[];
  IsInMp?: boolean;
}
