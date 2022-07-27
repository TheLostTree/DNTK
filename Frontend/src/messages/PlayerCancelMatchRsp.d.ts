/* eslint-disable */
import type { MatchType } from "./MatchType.d.ts";

/**
 * CmdId: 4152
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerCancelMatchRsp {
  Retcode?: number;
  MatchType?: MatchType;
}
