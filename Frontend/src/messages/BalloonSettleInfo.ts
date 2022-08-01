/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo.ts";

export interface BalloonSettleInfo {
  Uid?: number;
  ShootCount?: number;
  MaxCombo?: number;
  FinalScore?: number;
  PlayerInfo?: OnlinePlayerInfo;
}
