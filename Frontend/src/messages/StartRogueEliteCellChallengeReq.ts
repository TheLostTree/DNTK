/* eslint-disable */
import type { RogueEliteCellDifficultyType } from "./RogueEliteCellDifficultyType";

/**
 * CmdId: 8242
 * EnetChannelId: 0
 * EnetIsReliable: true
 * IsAllowClient: true
 */
export interface StartRogueEliteCellChallengeReq {
  Difficulty?: RogueEliteCellDifficultyType;
  DungeonId?: number;
  CellId?: number;
}
