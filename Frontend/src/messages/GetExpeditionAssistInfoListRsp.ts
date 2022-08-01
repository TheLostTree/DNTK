/* eslint-disable */
import type { ExpeditionAssistInfo } from "./ExpeditionAssistInfo";

/**
 * CmdId: 2035
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetExpeditionAssistInfoListRsp {
  AssistInfoList?: ExpeditionAssistInfo[];
  Retcode?: number;
}
