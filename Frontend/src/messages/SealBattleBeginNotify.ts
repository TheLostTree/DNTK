/* eslint-disable */
import type { SealBattleType } from "./SealBattleType";

/**
 * CmdId: 289
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface SealBattleBeginNotify {
  SealMaxProgress?: number;
  SealEntityId?: number;
  SealRadius?: number;
  BattleType?: SealBattleType;
}
