/* eslint-disable */
import type { GadgetPlayUidInfo } from "./GadgetPlayUidInfo";

/**
 * CmdId: 899
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface GadgetPlayStopNotify {
  IsWin?: boolean;
  EntityId?: number;
  PlayType?: number;
  UidInfoList?: GadgetPlayUidInfo[];
  Score?: number;
  CostTime?: number;
}
