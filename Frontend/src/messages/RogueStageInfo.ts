/* eslint-disable */
import type { RogueShowAvatarTeamInfo } from "./RogueShowAvatarTeamInfo.ts";
import type { RoguelikeRuneRecord } from "./RoguelikeRuneRecord.ts";

export interface RogueStageInfo {
  AvatarTeam?: RogueShowAvatarTeamInfo;
  IsPassed?: boolean;
  StageId?: number;
  ReviseMonsterLevel?: number;
  RuneRecordList?: RoguelikeRuneRecord[];
  IsOpen?: boolean;
  CurLevel?: number;
  CachedCoinCNum?: number;
  IsTakenReward?: boolean;
  IsInCombat?: boolean;
  CachedCoinBNum?: number;
  ExploreCellNum?: number;
  CoinCNum?: number;
  IsExplored?: boolean;
  MaxPassedLevel?: number;
}
