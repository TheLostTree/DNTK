/* eslint-disable */
import type { LockedPersonallineData } from "./LockedPersonallineData.ts";

/**
 * CmdId: 476
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PersonalLineAllDataRsp {
  CurFinishedDailyTaskCount?: number;
  CanBeUnlockedPersonalLineList?: number[];
  Retcode?: number;
  OngoingPersonalLineList?: number[];
  LegendaryKeyCount?: number;
  LockedPersonalLineList?: LockedPersonallineData[];
}
