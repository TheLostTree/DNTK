/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo";

export interface ScenePlayerInfo {
  SceneId?: number;
  PeerId?: number;
  OnlinePlayerInfo?: OnlinePlayerInfo;
  IsConnected?: boolean;
  Name?: string;
  Uid?: number;
}