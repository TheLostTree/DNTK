/* eslint-disable */
import type { QuestVarOp } from "./QuestVarOp.ts";

/**
 * CmdId: 447
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface QuestUpdateQuestVarReq {
  ParentQuestId?: number;
  QuestVarOpList?: QuestVarOp[];
  QuestId?: number;
  ParentQuestVarSeq?: number;
}
