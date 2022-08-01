/* eslint-disable */
import type { ChatInfo } from "./ChatInfo";

/**
 * CmdId: 3496
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChatHistoryNotify {
  ChatInfo?: ChatInfo[];
  ChannelId?: number;
}
