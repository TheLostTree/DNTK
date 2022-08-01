/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.ts";

export interface FallSettleInfo {
  CatchCount?: number;
  PlayerInfo?: OnlinePlayerInfo;
  Uid?: number;
  FlowerRingCatchCountMap?: { [key: number]: number };
  RemainTime?: number;
  FinalScore?: number;
}

export interface FallSettleInfo_FlowerRingCatchCountMapEntry {
  Key: number;
  Value: number;
}
