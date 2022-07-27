/* eslint-disable */
import type { AiSkillCdInfo } from "./AiSkillCdInfo.d.ts";

/**
 * CmdId: 376
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAiSyncSkillCdNotify {
  AiCdMap?: { [key: number]: AiSkillCdInfo };
}

export interface EvtAiSyncSkillCdNotify_AiCdMapEntry {
  Key: number;
  Value?: AiSkillCdInfo;
}
