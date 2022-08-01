/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType.ts";
import type { ServerBuff } from "./ServerBuff.ts";

/**
 * CmdId: 1298
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface LifeStateChangeNotify {
  EntityId?: number;
  ServerBuffList?: ServerBuff[];
  AttackTag?: string;
  MoveReliableSeq?: number;
  DieType?: PlayerDieType;
  LifeState?: number;
  SourceEntityId?: number;
}
