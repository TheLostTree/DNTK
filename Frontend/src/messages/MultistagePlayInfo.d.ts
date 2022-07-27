/* eslint-disable */
import type { InBattleMechanicusInfo } from "./InBattleMechanicusInfo.d.ts";
import type { InBattleFleurFairInfo } from "./InBattleFleurFairInfo.d.ts";
import type { HideAndSeekStageInfo } from "./HideAndSeekStageInfo.d.ts";
import type { InBattleChessInfo } from "./InBattleChessInfo.d.ts";
import type { IrodoriChessInfo } from "./IrodoriChessInfo.d.ts";

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
