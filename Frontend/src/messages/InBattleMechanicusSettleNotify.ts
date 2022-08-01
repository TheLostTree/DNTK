/* eslint-disable */
import type Long from "long";
import type { MultistageSettleWatcherInfo } from "./MultistageSettleWatcherInfo.ts";

/**
 * CmdId: 5305
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface InBattleMechanicusSettleNotify {
  GroupId?: number;
  SceneTimeMs?: Long;
  DifficultyPercentage?: number;
  TotalToken?: number;
  WatcherList?: MultistageSettleWatcherInfo[];
  RealToken?: number;
  IsSuccess?: boolean;
  PlayIndex?: number;
}
