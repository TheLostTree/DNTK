/* eslint-disable */
import type { FleurFairBalloonInfo } from "./FleurFairBalloonInfo.d.ts";
import type { FleurFairFallInfo } from "./FleurFairFallInfo.d.ts";
import type { FleurFairMusicGameInfo } from "./FleurFairMusicGameInfo.d.ts";

export interface FleurFairMinigameInfo {
  MinigameId?: number;
  IsOpen?: boolean;
  OpenTime?: number;
  BalloonInfo?: FleurFairBalloonInfo | undefined;
  FallInfo?: FleurFairFallInfo | undefined;
  MusicInfo?: FleurFairMusicGameInfo | undefined;
}
