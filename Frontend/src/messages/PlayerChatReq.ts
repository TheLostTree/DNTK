/* eslint-disable */
import type { ChatInfo } from "./ChatInfo";

/**
 * CmdId: 3185
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlayerChatReq {
  ChannelId?: number;
  ChatInfo?: ChatInfo;
}
