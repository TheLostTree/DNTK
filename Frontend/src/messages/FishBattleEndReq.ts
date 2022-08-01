/* eslint-disable */
import type { FishBattleResult } from "./FishBattleResult";

/**
 * CmdId: 5841
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface FishBattleEndReq {
  MaxBonusTime?: number;
  BattleResult?: FishBattleResult;
  IsAlwaysBonus?: boolean;
}
