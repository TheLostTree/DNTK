/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.ts";
import type { MatchType } from "./MatchType.ts";

/**
 * CmdId: 4195
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerApplyEnterMpAfterMatchAgreedNotify {
  SrcPlayerInfo?: OnlinePlayerInfo;
  MatchserverId?: number;
  MatchType?: MatchType;
}
