/* eslint-disable */
import type { BonusOpActivityInfo } from "./BonusOpActivityInfo.ts";

export interface OpActivityInfo {
  ActivityId?: number;
  EndTime?: number;
  BeginTime?: number;
  IsHasChange?: boolean;
  ScheduleId?: number;
  BonusInfo?: BonusOpActivityInfo | undefined;
}
