/* eslint-disable */
import type { MatchType } from "./MatchType";

/**
 * CmdId: 4175
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerMatchInfoNotify {
  MechanicusDifficultLevel?: number;
  EstimateMatchCostTime?: number;
  MatchType?: MatchType;
  MpPlayId?: number;
  MatchId?: number;
  MatchBeginTime?: number;
  DungeonId?: number;
  HostUid?: number;
}
