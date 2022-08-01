/* eslint-disable */
import type { AiSyncInfo } from "./AiSyncInfo.ts";

/**
 * CmdId: 400
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EntityAiSyncNotify {
  LocalAvatarAlertedMonsterList?: number[];
  InfoList?: AiSyncInfo[];
}
