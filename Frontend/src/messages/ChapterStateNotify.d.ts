/* eslint-disable */
import type { ChapterState } from "./ChapterState.d.ts";

/**
 * CmdId: 405
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChapterStateNotify {
  ChapterState?: ChapterState;
  NeedPlayerLevel?: ChapterStateNotify_NeedPlayerLevel;
  NeedBeginTime?: ChapterStateNotify_NeedBeginTime;
  ChapterId?: number;
}

export interface ChapterStateNotify_NeedPlayerLevel {
  IsLimit?: boolean;
  ConfigNeedPlayerLevel?: number;
}

export interface ChapterStateNotify_NeedBeginTime {
  ConfigNeedBeginTime?: number;
  IsLimit?: boolean;
}
