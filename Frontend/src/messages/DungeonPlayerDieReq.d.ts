/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType.d.ts";

/**
 * CmdId: 981
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface DungeonPlayerDieReq {
  DieType?: PlayerDieType;
  DungeonId?: number;
}
