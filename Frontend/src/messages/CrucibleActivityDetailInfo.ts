/* eslint-disable */
import type { Vector } from "./Vector.ts";
import type { CrucibleBattleUidInfo } from "./CrucibleBattleUidInfo.ts";

export interface CrucibleActivityDetailInfo {
  CostTime?: number;
  BattleWorldLevel?: number;
  UidInfoList?: CrucibleBattleUidInfo[];
  Pos?: Vector;
}
