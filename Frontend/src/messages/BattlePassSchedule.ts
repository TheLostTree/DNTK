/* eslint-disable */
import type { BattlePassCycle } from "./BattlePassCycle.ts";
import type { BattlePassUnlockStatus } from "./BattlePassUnlockStatus.ts";
import type { BattlePassProduct } from "./BattlePassProduct.ts";
import type { BattlePassRewardTag } from "./BattlePassRewardTag.ts";

export interface BattlePassSchedule {
  Level?: number;
  BeginTime?: number;
  EndTime?: number;
  Point?: number;
  CurCycle?: BattlePassCycle;
  UnlockStatus?: BattlePassUnlockStatus;
  RewardTakenList?: BattlePassRewardTag[];
  CurCyclePoints?: number;
  Unk2700ODHAAHEPFAG?: number;
  ProductInfo?: BattlePassProduct;
  IsExtraPaidRewardTaken?: boolean;
  IsViewed?: boolean;
  ScheduleId?: number;
}
