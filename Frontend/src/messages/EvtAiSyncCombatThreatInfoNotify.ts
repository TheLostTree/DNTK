/* eslint-disable */
import type { AiThreatInfo } from "./AiThreatInfo";

/**
 * CmdId: 329
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAiSyncCombatThreatInfoNotify {
  CombatThreatInfoMap?: { [key: number]: AiThreatInfo };
}

export interface EvtAiSyncCombatThreatInfoNotify_CombatThreatInfoMapEntry {
  Key: number;
  Value?: AiThreatInfo;
}
