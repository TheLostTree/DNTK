/* eslint-disable */
import type { Vector } from "./Vector.d.ts";
import type { CrucibleBattleUidInfo } from "./CrucibleBattleUidInfo.d.ts";

export interface CrucibleActivityDetailInfo {
  CostTime?: number;
  BattleWorldLevel?: number;
  UidInfoList?: CrucibleBattleUidInfo[];
  Pos?: Vector;
}
