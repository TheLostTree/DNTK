/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type Long from "long";

/**
 * CmdId: 324
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface EvtAvatarSitDownNotify {
  Position?: Vector;
  EntityId?: number;
  ChairId?: Long;
}
