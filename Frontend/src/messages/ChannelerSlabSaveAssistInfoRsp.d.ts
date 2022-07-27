/* eslint-disable */
import type { ChannelerSlabAssistInfo } from "./ChannelerSlabAssistInfo.d.ts";

/**
 * CmdId: 8932
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChannelerSlabSaveAssistInfoRsp {
  AssistInfoList?: ChannelerSlabAssistInfo[];
  Retcode?: number;
}
