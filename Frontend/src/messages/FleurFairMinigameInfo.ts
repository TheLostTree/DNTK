/* eslint-disable */
import type { FleurFairBalloonInfo } from "./FleurFairBalloonInfo.ts";
import type { FleurFairFallInfo } from "./FleurFairFallInfo.ts";
import type { FleurFairMusicGameInfo } from "./FleurFairMusicGameInfo.ts";

export interface FleurFairMinigameInfo {
  MinigameId?: number;
  IsOpen?: boolean;
  OpenTime?: number;
  BalloonInfo?: FleurFairBalloonInfo | undefined;
  FallInfo?: FleurFairFallInfo | undefined;
  MusicInfo?: FleurFairMusicGameInfo | undefined;
}
