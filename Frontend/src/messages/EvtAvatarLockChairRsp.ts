/* eslint-disable */
import type Long from "long";
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 366
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface EvtAvatarLockChairRsp {
  ChairId?: Long;
  EntityId?: number;
  Position?: Vector;
  Retcode?: number;
}
