/* eslint-disable */
import type { SceneTeamAvatar } from "./SceneTeamAvatar.ts";

/**
 * CmdId: 1775
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SceneTeamUpdateNotify {
  SceneTeamAvatarList?: SceneTeamAvatar[];
  IsInMp?: boolean;
}
