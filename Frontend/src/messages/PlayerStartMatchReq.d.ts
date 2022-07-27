/* eslint-disable */
import type { MatchType } from "./MatchType.d.ts";

/**
 * CmdId: 4176
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface PlayerStartMatchReq {
  MatchType?: MatchType;
  MechanicusDifficultLevel?: number;
  MatchParamList?: number[];
  DungeonId?: number;
  MpPlayId?: number;
  MatchId?: number;
}
