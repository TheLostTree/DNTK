/* eslint-disable */
import type { Vector } from "./Vector.ts";

/**
 * CmdId: 3137
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetScenePerformanceRsp {
  MonsterNum?: number;
  GatherNumInsight?: number;
  GadgetNum?: number;
  Retcode?: number;
  DynamicGroupNum?: number;
  GroupNum?: number;
  Pos?: Vector;
  EntityNum?: number;
  GatherNum?: number;
}
