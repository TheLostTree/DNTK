/* eslint-disable */
import type { PlayerDieOption } from "./PlayerDieOption.ts";

/**
 * CmdId: 948
 * EnetChannelId: 0
 * EnetIsReliable: true
 */
export interface DungeonDieOptionRsp {
  Retcode?: number;
  ReviveCount?: number;
  DieOption?: PlayerDieOption;
}
