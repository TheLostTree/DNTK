/* eslint-disable */
import type { BattlePassSchedule } from "./BattlePassSchedule.ts";
import type { BattlePassMission } from "./BattlePassMission.ts";

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
