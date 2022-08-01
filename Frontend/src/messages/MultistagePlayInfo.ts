/* eslint-disable */
import type { InBattleMechanicusInfo } from "./InBattleMechanicusInfo";
import type { InBattleFleurFairInfo } from "./InBattleFleurFairInfo";
import type { HideAndSeekStageInfo } from "./HideAndSeekStageInfo";
import type { InBattleChessInfo } from "./InBattleChessInfo";
import type { IrodoriChessInfo } from "./IrodoriChessInfo";

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
