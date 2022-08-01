/* eslint-disable */
import type { RoguelikeSettleCoinInfo } from "./RoguelikeSettleCoinInfo.ts";

export interface RoguelikeDungeonSettleInfo {
  StageId?: number;
  IsFinalLevel?: boolean;
  FinishedChallengeCellNumMap?: { [key: number]: RoguelikeSettleCoinInfo };
  IsCoinCReachLimit?: boolean;
  CurLevel?: number;
  TotalCoinBNum?: number;
  TotalCoinCNum?: number;
}

export interface RoguelikeDungeonSettleInfo_FinishedChallengeCellNumMapEntry {
  Key: number;
  Value?: RoguelikeSettleCoinInfo;
}
