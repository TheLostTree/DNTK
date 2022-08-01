/* eslint-disable */
import type { MatchType } from "./MatchType.ts";

/**
 * CmdId: 4168
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerStartMatchRsp {
  Retcode?: number;
  PunishEndTime?: number;
  Param?: number;
  MpPlayId?: number;
  MechanicusDifficultLevel?: number;
  DungeonId?: number;
  MatchId?: number;
  MatchType?: MatchType;
}
