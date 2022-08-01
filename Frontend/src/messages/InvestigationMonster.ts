/* eslint-disable */
import type { WeeklyBossResinDiscountInfo } from "./WeeklyBossResinDiscountInfo";
import type { Vector } from "./Vector";

export interface InvestigationMonster {
  IsAlive?: boolean;
  RefreshInterval?: number;
  Id?: number;
  Level?: number;
  BossChestNum?: number;
  WeeklyBossResinDiscountInfo?: WeeklyBossResinDiscountInfo;
  MonsterId?: number;
  Pos?: Vector;
  Resin?: number;
  MaxBossChestNum?: number;
  NextRefreshTime?: number;
  GroupId?: number;
  SceneId?: number;
  IsAreaLocked?: boolean;
  LockState?: InvestigationMonster_LockState;
  NextBossChestRefreshTime?: number;
  CityId?: number;
}

export enum InvestigationMonster_LockState {
  LOCK_STATE_NONE = 0,
  LOCK_STATE_QUEST = 1,
  UNRECOGNIZED = -1,
}
