/* eslint-disable */
import type { FindHilichurlDayContentInfo } from "./FindHilichurlDayContentInfo.d.ts";

export interface FindHilichurlDetailInfo {
  DayContentInfoList?: FindHilichurlDayContentInfo[];
  MinOpenPlayerLevel?: number;
  IsEndQuestAccept?: boolean;
  ContentCloseTime?: number;
  IsContentClosed?: boolean;
  PlayerDayIndex?: number;
  DayIndex?: number;
}
