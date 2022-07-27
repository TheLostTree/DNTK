/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.d.ts";
import type { MatchType } from "./MatchType.d.ts";

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
