/* eslint-disable */
import type { CreateEntityInfo } from "./CreateEntityInfo.d.ts";

/**
 * CmdId: 499
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface QuestCreateEntityReq {
  ParentQuestId?: number;
  IsRewind?: boolean;
  QuestId?: number;
  Entity?: CreateEntityInfo;
}
