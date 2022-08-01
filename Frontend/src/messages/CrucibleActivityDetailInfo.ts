/* eslint-disable */
import type { Vector } from "./Vector";
import type { CrucibleBattleUidInfo } from "./CrucibleBattleUidInfo";

export interface CrucibleActivityDetailInfo {
  CostTime?: number;
  BattleWorldLevel?: number;
  UidInfoList?: CrucibleBattleUidInfo[];
  Pos?: Vector;
}
