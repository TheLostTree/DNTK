/* eslint-disable */
import type { MatchType } from "./MatchType.ts";

/**
 * CmdId: 4194
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerConfirmMatchRsp {
  MatchType?: MatchType;
  MatchId?: number;
  IsAgreed?: boolean;
  Retcode?: number;
}
