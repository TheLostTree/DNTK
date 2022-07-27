/* eslint-disable */
import type { TeamEnterSceneInfo } from "./TeamEnterSceneInfo.d.ts";
import type { MPLevelEntityInfo } from "./MPLevelEntityInfo.d.ts";
import type { AvatarEnterSceneInfo } from "./AvatarEnterSceneInfo.d.ts";

/**
 * CmdId: 214
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlayerEnterSceneInfoNotify {
  TeamEnterInfo?: TeamEnterSceneInfo;
  EnterSceneToken?: number;
  AvatarEnterInfo?: AvatarEnterSceneInfo[];
  CurAvatarEntityId?: number;
  MpLevelEntityInfo?: MPLevelEntityInfo;
}
