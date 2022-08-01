/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType.ts";
import type Long from "long";
import type { ServerBuff } from "./ServerBuff.ts";

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
