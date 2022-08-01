/* eslint-disable */
import type { BattlePassCycle } from "./BattlePassCycle";
import type { BattlePassUnlockStatus } from "./BattlePassUnlockStatus";
import type { BattlePassProduct } from "./BattlePassProduct";
import type { BattlePassRewardTag } from "./BattlePassRewardTag";

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
