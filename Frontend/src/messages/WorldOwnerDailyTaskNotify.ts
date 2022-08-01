/* eslint-disable */
import type { DailyTaskInfo } from "./DailyTaskInfo.ts";

/**
 * CmdId: 102
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface WorldOwnerDailyTaskNotify {
  FilterCityId?: number;
  TaskList?: DailyTaskInfo[];
}
