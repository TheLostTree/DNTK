/* eslint-disable */
import type { LockedPersonallineData } from "./LockedPersonallineData";

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
