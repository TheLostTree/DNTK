/* eslint-disable */
import type { RoguelikeDungeonSettleInfo } from "./RoguelikeDungeonSettleInfo.d.ts";

/**
 * CmdId: 8139
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface RoguelikeGiveUpRsp {
  Retcode?: number;
  StageId?: number;
  SettleInfo?: RoguelikeDungeonSettleInfo | undefined;
}
