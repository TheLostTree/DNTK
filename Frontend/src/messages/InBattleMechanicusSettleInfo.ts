/* eslint-disable */
import type Long from "long";
import type { MultistageSettleWatcherInfo } from "./MultistageSettleWatcherInfo";

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
