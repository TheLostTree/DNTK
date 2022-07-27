/* eslint-disable */
import type { BonusOpActivityInfo } from "./BonusOpActivityInfo.d.ts";

export interface OpActivityInfo {
  ActivityId?: number;
  EndTime?: number;
  BeginTime?: number;
  IsHasChange?: boolean;
  ScheduleId?: number;
  BonusInfo?: BonusOpActivityInfo | undefined;
}
