/* eslint-disable */
import type { InBattleMechanicusInfo } from "./InBattleMechanicusInfo.ts";
import type { InBattleFleurFairInfo } from "./InBattleFleurFairInfo.ts";
import type { HideAndSeekStageInfo } from "./HideAndSeekStageInfo.ts";
import type { InBattleChessInfo } from "./InBattleChessInfo.ts";
import type { IrodoriChessInfo } from "./IrodoriChessInfo.ts";

export interface MultistagePlayInfo {
  PlayIndex?: number;
  PlayType?: number;
  StageType?: number;
  Duration?: number;
  GroupId?: number;
  BeginTime?: number;
  StageIndex?: number;
  MechanicusInfo?: InBattleMechanicusInfo | undefined;
  FleurFairInfo?: InBattleFleurFairInfo | undefined;
  HideAndSeekInfo?: HideAndSeekStageInfo | undefined;
  ChessInfo?: InBattleChessInfo | undefined;
  IrodoriChessInfo?: IrodoriChessInfo | undefined;
}
