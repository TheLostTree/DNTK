/* eslint-disable */
import type { ChatInfo } from "./ChatInfo.ts";

/**
 * CmdId: 3496
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChatHistoryNotify {
  ChatInfo?: ChatInfo[];
  ChannelId?: number;
}
