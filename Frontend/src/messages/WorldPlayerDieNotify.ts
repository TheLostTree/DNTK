/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType";

/**
 * CmdId: 285
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface WorldPlayerDieNotify {
  DieType?: PlayerDieType;
  MurdererEntityId?: number;
  MonsterId?: number | undefined;
  GadgetId?: number | undefined;
}
