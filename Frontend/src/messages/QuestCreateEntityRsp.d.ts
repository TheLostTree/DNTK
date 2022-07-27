/* eslint-disable */
import type { CreateEntityInfo } from "./CreateEntityInfo.d.ts";

/**
 * CmdId: 431
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface QuestCreateEntityRsp {
  QuestId?: number;
  Retcode?: number;
  EntityId?: number;
  Entity?: CreateEntityInfo;
  ParentQuestId?: number;
  IsRewind?: boolean;
}
