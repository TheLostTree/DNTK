/* eslint-disable */
import type { FleurFairBalloonInfo } from "./FleurFairBalloonInfo";
import type { FleurFairFallInfo } from "./FleurFairFallInfo";
import type { FleurFairMusicGameInfo } from "./FleurFairMusicGameInfo";

export interface FleurFairMinigameInfo {
  MinigameId?: number;
  IsOpen?: boolean;
  OpenTime?: number;
  BalloonInfo?: FleurFairBalloonInfo | undefined;
  FallInfo?: FleurFairFallInfo | undefined;
  MusicInfo?: FleurFairMusicGameInfo | undefined;
}
