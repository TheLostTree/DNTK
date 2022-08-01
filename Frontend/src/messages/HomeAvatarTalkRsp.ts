/* eslint-disable */
import type { HomeAvatarTalkFinishInfo } from "./HomeAvatarTalkFinishInfo.ts";

/**
 * CmdId: 4464
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeAvatarTalkRsp {
  Retcode?: number;
  AvatarTalkInfo?: HomeAvatarTalkFinishInfo;
}
