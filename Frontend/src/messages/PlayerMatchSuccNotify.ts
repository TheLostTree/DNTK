/* eslint-disable */
import type { MatchType } from "./MatchType.ts";
import type { GeneralMatchInfo } from "./GeneralMatchInfo.ts";

/**
 * CmdId: 4179
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerMatchSuccNotify {
  MechanicusDifficultLevel?: number;
  DungeonId?: number;
  MatchType?: MatchType;
  MpPlayId?: number;
  GeneralMatchInfo?: GeneralMatchInfo;
  HostUid?: number;
  ConfirmEndTime?: number;
}
