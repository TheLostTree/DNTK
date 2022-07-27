/* eslint-disable */
import type { ChessEntranceDetailInfo } from "./ChessEntranceDetailInfo.d.ts";

export interface ChessMysteryInfo {
  EntrancePointMap?: { [key: number]: number };
  ExitPointIdList?: number[];
  DetailInfoMap?: { [key: number]: ChessEntranceDetailInfo };
}

export interface ChessMysteryInfo_EntrancePointMapEntry {
  Key: number;
  Value: number;
}

export interface ChessMysteryInfo_DetailInfoMapEntry {
  Key: number;
  Value?: ChessEntranceDetailInfo;
}
