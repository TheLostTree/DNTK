/* eslint-disable */
import type { ChatInfo } from "./ChatInfo.d.ts";

/**
 * CmdId: 5023
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PullRecentChatRsp {
  ChatInfo?: ChatInfo[];
  Retcode?: number;
}
