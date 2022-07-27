/* eslint-disable */
import type { InBattleMechanicusSettleInfo } from "./InBattleMechanicusSettleInfo.d.ts";
import type { InBattleChessSettleInfo } from "./InBattleChessSettleInfo.d.ts";
import type { IrodoriChessSettleInfo } from "./IrodoriChessSettleInfo.d.ts";

/**
 * CmdId: 5313
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface MultistagePlaySettleNotify {
  PlayIndex?: number;
  GroupId?: number;
  MechanicusSettleInfo?: InBattleMechanicusSettleInfo | undefined;
  ChessSettleInfo?: InBattleChessSettleInfo | undefined;
  IrodoriChessSettleInfo?: IrodoriChessSettleInfo | undefined;
}
