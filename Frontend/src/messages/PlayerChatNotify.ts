/* eslint-disable */
import type { ChatInfo } from "./ChatInfo.ts";

/**
 * CmdId: 3010
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerChatNotify {
  ChatInfo?: ChatInfo;
  ChannelId?: number;
}
