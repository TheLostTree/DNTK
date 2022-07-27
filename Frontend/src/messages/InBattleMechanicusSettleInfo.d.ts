/* eslint-disable */
import type Long from "long";
import type { MultistageSettleWatcherInfo } from "./MultistageSettleWatcherInfo.d.ts";

export interface InBattleMechanicusSettleInfo {
  SceneTimeMs?: Long;
  TotalToken?: number;
  RealToken?: number;
  WatcherList?: MultistageSettleWatcherInfo[];
  IsSuccess?: boolean;
  PlayIndex?: number;
  DifficultyPercentage?: number;
  GroupId?: number;
}
