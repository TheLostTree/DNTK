/* eslint-disable */
import type { WeeklyBossResinDiscountInfo } from "./WeeklyBossResinDiscountInfo";

export interface BossChestInfo {
  MonsterConfigId?: number;
  Resin?: number;
  RemainUidList?: number[];
  QualifyUidList?: number[];
  UidDiscountMap?: { [key: number]: WeeklyBossResinDiscountInfo };
}

export interface BossChestInfo_UidDiscountMapEntry {
  Key: number;
  Value?: WeeklyBossResinDiscountInfo;
}
