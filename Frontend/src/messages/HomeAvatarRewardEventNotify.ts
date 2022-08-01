/* eslint-disable */
import type { HomeAvatarRewardEventInfo } from "./HomeAvatarRewardEventInfo";

/**
 * CmdId: 4852
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HomeAvatarRewardEventNotify {
  IsEventTrigger?: boolean;
  RewardEvent?: HomeAvatarRewardEventInfo;
  PendingList?: HomeAvatarRewardEventInfo[];
}
