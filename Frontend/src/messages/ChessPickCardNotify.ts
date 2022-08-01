/* eslint-disable */
import type { ChessNormalCardInfo } from "./ChessNormalCardInfo.ts";

/**
 * CmdId: 5380
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface ChessPickCardNotify {
  CurseCardId?: number;
  NormalCardInfo?: ChessNormalCardInfo;
}
