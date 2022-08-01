/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType";
import type { ServerBuff } from "./ServerBuff";

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
