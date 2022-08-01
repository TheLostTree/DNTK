/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType";
import type Long from "long";
import type { ServerBuff } from "./ServerBuff";

/**
 * CmdId: 1290
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface AvatarLifeStateChangeNotify {
  LifeState?: number;
  AttackTag?: string;
  DieType?: PlayerDieType;
  ServerBuffList?: ServerBuff[];
  MoveReliableSeq?: number;
  SourceEntityId?: number;
  AvatarGuid?: Long;
}
