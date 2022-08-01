/* eslint-disable */
import type { MatchType } from "./MatchType";

/**
 * CmdId: 4152
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerCancelMatchRsp {
  Retcode?: number;
  MatchType?: MatchType;
}
