/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType.d.ts";
import type Long from "long";
import type { ServerBuff } from "./ServerBuff.d.ts";

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
