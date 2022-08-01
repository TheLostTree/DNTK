/* eslint-disable */
import type { MatchReason } from "./MatchReason.ts";

/**
 * CmdId: 4191
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerGeneralMatchDismissNotify {
  UidList?: number[];
  Reason?: MatchReason;
  MatchId?: number;
}
