/* eslint-disable */
import type { BattlePassCycle } from "./BattlePassCycle.d.ts";
import type { BattlePassUnlockStatus } from "./BattlePassUnlockStatus.d.ts";
import type { BattlePassProduct } from "./BattlePassProduct.d.ts";
import type { BattlePassRewardTag } from "./BattlePassRewardTag.d.ts";

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
