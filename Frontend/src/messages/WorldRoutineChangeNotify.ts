/* eslint-disable */
import type { WorldRoutineInfo } from "./WorldRoutineInfo.ts";

/**
 * CmdId: 3507
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WorldRoutineChangeNotify {
  RoutineInfo?: WorldRoutineInfo;
  RoutineType?: number;
}
