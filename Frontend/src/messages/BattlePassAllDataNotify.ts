/* eslint-disable */
import type { BattlePassSchedule } from "./BattlePassSchedule";
import type { BattlePassMission } from "./BattlePassMission";

/**
 * CmdId: 2626
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface BattlePassAllDataNotify {
  HaveCurSchedule?: boolean;
  MissionList?: BattlePassMission[];
  CurSchedule?: BattlePassSchedule;
}
