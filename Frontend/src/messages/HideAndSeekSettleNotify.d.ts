/* eslint-disable */
import type { HideAndSeekSettleInfo } from "./HideAndSeekSettleInfo.d.ts";
import type { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo.d.ts";

/**
 * CmdId: 5317
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface HideAndSeekSettleNotify {
  CostTime?: number;
  SettleInfoList?: HideAndSeekSettleInfo[];
  WinnerList?: number[];
  Reason?: HideAndSeekSettleNotify_SettleReason;
  PlayIndex?: number;
  IsRecordScore?: boolean;
  ScoreList?: ExhibitionDisplayInfo[];
  StageType?: number;
}

export enum HideAndSeekSettleNotify_SettleReason {
  SETTLE_REASON_TIME_OUT = 0,
  SETTLE_REASON_PLAY_END = 1,
  SETTLE_REASON_PLAYER_QUIT = 2,
  UNRECOGNIZED = -1,
}
