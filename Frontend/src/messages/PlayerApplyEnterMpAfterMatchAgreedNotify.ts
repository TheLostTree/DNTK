/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo";
import type { MatchType } from "./MatchType";

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
