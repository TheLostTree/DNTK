/* eslint-disable */
import type { RogueShowAvatarTeamInfo } from "./RogueShowAvatarTeamInfo.d.ts";
import type { RoguelikeRuneRecord } from "./RoguelikeRuneRecord.d.ts";

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
