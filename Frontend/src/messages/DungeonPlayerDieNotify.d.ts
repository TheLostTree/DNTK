/* eslint-disable */
import type { PlayerDieType } from "./PlayerDieType.d.ts";
import type { StrengthenPointData } from "./StrengthenPointData.d.ts";

/**
 * CmdId: 931
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonPlayerDieNotify {
  StrengthenPointDataMap?: { [key: number]: StrengthenPointData };
  WaitTime?: number;
  DungeonId?: number;
  MurdererEntityId?: number;
  DieType?: PlayerDieType;
  ReviveCount?: number;
  MonsterId?: number | undefined;
  GadgetId?: number | undefined;
}

export interface DungeonPlayerDieNotify_StrengthenPointDataMapEntry {
  Key: number;
  Value?: StrengthenPointData;
}
