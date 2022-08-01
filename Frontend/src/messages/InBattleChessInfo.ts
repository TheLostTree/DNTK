/* eslint-disable */
import type { ChessMysteryInfo } from "./ChessMysteryInfo";
import type { ChessPlayerInfo } from "./ChessPlayerInfo";
import type { ChessCardInfo } from "./ChessCardInfo";

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
