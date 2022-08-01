/* eslint-disable */
import type { OnlinePlayerInfo } from "./OnlinePlayerInfo";

/**
 * CmdId: 1826
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface PlayerApplyEnterMpNotify {
  SrcThreadIndex?: number;
  SrcAppId?: number;
  SrcPlayerInfo?: OnlinePlayerInfo;
}
