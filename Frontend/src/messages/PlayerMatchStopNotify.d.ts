/* eslint-disable */
import type { MatchReason } from "./MatchReason.d.ts";

/**
 * CmdId: 4181
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerMatchStopNotify {
  Reason?: MatchReason;
  HostUid?: number;
}
