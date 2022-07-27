/* eslint-disable */
import type { ChessMysteryInfo } from "./ChessMysteryInfo.d.ts";
import type { ChessPlayerInfo } from "./ChessPlayerInfo.d.ts";
import type { ChessCardInfo } from "./ChessCardInfo.d.ts";

export interface InBattleChessInfo {
  BanCardTagList?: number[];
  Round?: number;
  SelectedCardInfoList?: ChessCardInfo[];
  MysteryInfo?: ChessMysteryInfo;
  PlayerInfoMap?: { [key: number]: ChessPlayerInfo };
  MaxEscapableMonsters?: number;
  EscapedMonsters?: number;
  TotalRound?: number;
  LeftMonsters?: number;
}

export interface InBattleChessInfo_PlayerInfoMapEntry {
  Key: number;
  Value?: ChessPlayerInfo;
}
