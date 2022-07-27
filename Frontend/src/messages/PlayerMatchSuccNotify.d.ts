/* eslint-disable */
import type { MatchType } from "./MatchType.d.ts";
import type { GeneralMatchInfo } from "./GeneralMatchInfo.d.ts";

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
