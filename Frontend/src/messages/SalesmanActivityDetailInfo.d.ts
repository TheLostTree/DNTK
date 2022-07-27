/* eslint-disable */
import type { SalesmanStatusType } from "./SalesmanStatusType.d.ts";

export interface SalesmanActivityDetailInfo {
  SpecialRewardPreviewId?: number;
  Status?: SalesmanStatusType;
  LastDeliverTime?: number;
  SelectedRewardIdMap?: { [key: number]: number };
  DeliverCount?: number;
  IsHasTakenSpecialReward?: boolean;
  DayIndex?: number;
  CondDayCount?: number;
  DayRewardId?: number;
  IsTodayHasDelivered?: boolean;
}

export interface SalesmanActivityDetailInfo_SelectedRewardIdMapEntry {
  Key: number;
  Value: number;
}
