/* eslint-disable */
import type { ChessCardInfo } from "./ChessCardInfo.ts";

/**
 * CmdId: 5392
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChessSelectedCardsNotify {
  SelectedCardInfoList?: ChessCardInfo[];
}
