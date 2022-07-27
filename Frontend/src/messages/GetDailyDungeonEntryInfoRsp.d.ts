/* eslint-disable */
import type { DailyDungeonEntryInfo } from "./DailyDungeonEntryInfo.d.ts";

/**
 * CmdId: 967
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GetDailyDungeonEntryInfoRsp {
  DailyDungeonInfoList?: DailyDungeonEntryInfo[];
  Retcode?: number;
}
