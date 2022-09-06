/* eslint-disable */
import type { TeamEnterSceneInfo } from "./TeamEnterSceneInfo";
import type { MPLevelEntityInfo } from "./MPLevelEntityInfo";
import type { AvatarEnterSceneInfo } from "./AvatarEnterSceneInfo";

/**
 * CmdId: 214
 * EnetChannelId: 0
 * EnetIsReliable: false
 * IsAllowClient: true
 */
export interface PlayerEnterSceneInfoNotify {
  TeamEnterInfo?: TeamEnterSceneInfo;
  EnterSceneToken?: number;
  AvatarEnterInfo?: AvatarEnterSceneInfo[];
  CurAvatarEntityId?: number;
  MpLevelEntityInfo?: MPLevelEntityInfo;
}
